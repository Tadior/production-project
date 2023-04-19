import { PropsWithChildren, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from "app/entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "app/entities/User";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
  className?: string;
}

export function ProfilePageHeader(
  props: PropsWithChildren<ProfilePageHeaderProps>
) {
  const { className } = props;
  const { t } = useTranslation();
  const authData = useSelector((getUserAuthData));
  const profileData = useSelector((getProfileData));
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const canEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={cls.ProfilePageHeader}>
      <Text title={t("profile")} />
      {canEdit && (
        <div className={cls.btnsWrapper}>
          {readonly ? (
            <Button
              theme={ButtonTheme.OUTLINE}
              className={cls.editBtn}
              onClick={onEdit}
            >
              {t("edit")}
            </Button>
          ) : (
            <>
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                className={cls.editBtn}
                onClick={onCancelEdit}
              >
                {t("discard")}
              </Button>

              <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.saveBtn}
                onClick={onSave}
              >
                {t("save")}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
