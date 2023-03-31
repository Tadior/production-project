import { classNames } from "shared/lib/classNames/classNames";
import { PropsWithChildren } from "react";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { useSelector } from "react-redux";
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

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.data}>
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
          value={data?.country}
          placeholder={t("input-country")}
          className={cls.input}
          readOnly={readonly}
          onChange={onChangeFirstName}
        />
        <Input
          value={data?.currency}
          placeholder={t("input-currency")}
          className={cls.input}
          readOnly={readonly}
          onChange={onChangeLastName}
        />
        <Input
          value={data?.username}
          placeholder={t("input-username")}
          className={cls.input}
          readOnly={readonly}
          onChange={onChangeFirstName}
        />
        <Input
          value={data?.avatar}
          placeholder={t("input-avatar")}
          className={cls.input}
          readOnly={readonly}
          onChange={onChangeLastName}
        />
      </div>
    </div>
  );
}
