import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import { Dropdown } from '@/shared/ui/redesigned/Popups';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation('navbar');
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  const items = [
    ...(isAdminPanelAvailable
      ? [
          {
            content: t('adminka'),
            href: getRouteAdmin(),
          },
        ]
      : []),
    {
      content: t('profile-link'),
      href: getRouteProfile(authData.id),
    },
    {
      content: t('sign-out'),
      onClick: onLogout,
    },
  ];

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Dropdown
          className={classNames('', {}, [className])}
          items={items}
          direction="bottom left"
          trigger={<Avatar size={40} src={authData.avatar} />}
        />
      }
      off={
        <DropdownDeprecated
          className={classNames('', {}, [className])}
          items={items}
          direction="bottom left"
          trigger={
            <AvatarDeprecated
              fallbackInverted
              size={30}
              src={authData.avatar}
            />
          }
        />
      }
    />
  );
});
