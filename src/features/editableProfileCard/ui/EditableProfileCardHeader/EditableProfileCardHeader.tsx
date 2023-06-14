import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { HStack } from '@/shared/ui/redesigned/Stack';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(
  (props: EditableProfileCardHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
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
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card border="partial" padding="24" max>
            <HStack max justify="between" className="">
              <Text title={t('profile')} />
              {canEdit && (
                <div>
                  {readonly ? (
                    <Button
                      onClick={onEdit}
                      data-testid="EditableProfileCardHeader.EditButton"
                    >
                      {t('edit')}
                    </Button>
                  ) : (
                    <HStack gap="8">
                      <Button
                        onClick={onCancelEdit}
                        data-testid="EditableProfileCardHeader.CancelButton"
                        color="error"
                      >
                        {t('discard')}
                      </Button>

                      <Button
                        onClick={onSave}
                        data-testid="EditableProfileCardHeader.SaveButton"
                        color="success"
                      >
                        {t('save')}
                      </Button>
                    </HStack>
                  )}
                </div>
              )}
            </HStack>
          </Card>
        }
        off={
          <HStack max justify="between" className="">
            <TextDeprecated title={t('profile')} />
            {canEdit && (
              <div>
                {readonly ? (
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                    data-testid="EditableProfileCardHeader.EditButton"
                  >
                    {t('edit')}
                  </ButtonDeprecated>
                ) : (
                  <HStack gap="8">
                    <ButtonDeprecated
                      theme={ButtonTheme.OUTLINE_RED}
                      onClick={onCancelEdit}
                      data-testid="EditableProfileCardHeader.CancelButton"
                    >
                      {t('discard')}
                    </ButtonDeprecated>

                    <ButtonDeprecated
                      theme={ButtonTheme.OUTLINE}
                      onClick={onSave}
                      data-testid="EditableProfileCardHeader.SaveButton"
                    >
                      {t('save')}
                    </ButtonDeprecated>
                  </HStack>
                )}
              </div>
            )}
          </HStack>
        }
      />
    );
  },
);
