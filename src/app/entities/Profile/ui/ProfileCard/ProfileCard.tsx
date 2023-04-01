import { Mods, classNames } from "shared/lib/classNames/classNames";
import { PropsWithChildren } from "react";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { useSelector } from "react-redux";
import { Select } from "shared/ui/Select/Select";
import { Currency, CurrencySelect } from "app/entities/Currency";
import { Country } from "app/entities/Country";
import { CountrySelect } from "app/entities/Country/ui/CountrySelect/CountrySelect";
import cls from "./ProfileCard.module.scss";
import { Profile } from "../../model/types/profile";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName: (value?: string) => void;
  onChangeLastName: (value?: string) => void;
  onChangeAge: (value?: string) => void;
  onChangeCity: (value?: string) => void;
  onChangeCountry: (country?: Country) => void;
  onChangeUsername: (value?: string) => void;
  onChangeCurrency: (currency: Currency) => void;
  onChangeAvatar: (value?: string) => void;
}

export function ProfileCard(props: PropsWithChildren<ProfileCardProps>) {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeCountry,
    onChangeUsername,
    onChangeCurrency,
    onChangeAvatar,
  } = props;
  const { t } = useTranslation("profile");

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t("profile-error-title")}
          text={t("profile-error-text")}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}

        <Input
          value={data?.firstName}
          placeholder={t("input-firstname")}
          className={cls.input}
          readOnly={readonly}
          onChange={onChangeFirstName}
        />
        <Input
          value={data?.lastName}
          placeholder={t("input-lastname")}
          className={cls.input}
          readOnly={readonly}
          onChange={onChangeLastName}
        />
        <Input
          value={data?.age}
          placeholder={t("input-age")}
          className={cls.input}
          readOnly={readonly}
          onChange={onChangeAge}
        />
        <Input
          value={data?.city}
          placeholder={t("input-city")}
          className={cls.input}
          readOnly={readonly}
          onChange={onChangeCity}
        />
        <Input
          value={data?.username}
          placeholder={t("input-username")}
          className={cls.input}
          readOnly={readonly}
          onChange={onChangeUsername}
        />
        <Input
          value={data?.avatar}
          placeholder={t("input-avatar")}
          className={cls.input}
          readOnly={readonly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
}
