import { classNames } from "shared/lib/classNames/classNames";
import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import cls from "./ProfileCard.module.scss";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";

interface ProfileCardProps {
  className?: string;
}

export function ProfileCard(props: PropsWithChildren<ProfileCardProps>) {
  const { className } = props;
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const { t } = useTranslation("profile");

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t("profile")} />
        <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
          {t("edit")}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.firstName}
          placeholder={t("input-firstname")}
          className={cls.input}
        />
        <Input
          value={data?.lastName}
          placeholder={t("input-lastname")}
          className={cls.input}
        />
      </div>
    </div>
  );
}
