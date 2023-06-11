import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCardDeprecated.module.scss';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Loader } from '@/shared/ui/deprecated/Loader';
import {
  Text as TextDeprecated,
  TextAlign,
  TextTheme,
} from '@/shared/ui/deprecated/Text';

export const ProfileCardDeprecatedLoader = () => {
  return (
    <HStack
      justify="center"
      className={classNames(cls.ProfileCard, {}, [cls.loading])}
    >
      <Loader />
    </HStack>
  );
};
export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation('profile');
  return (
    <HStack
      justify="center"
      className={classNames(cls.ProfileCard, {}, ['', cls.error])}
    >
      <TextDeprecated
        theme={TextTheme.ERROR}
        title={t('profile-error-title')}
        text={t('profile-error-text')}
        align={TextAlign.CENTER}
      />
    </HStack>
  );
};

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
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
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.ProfileCard, mods, [className])}
    >
      {data?.avatar && (
        <HStack max justify="center" className={cls.avatarWrapper}>
          <AvatarDeprecated src={data?.avatar} />
        </HStack>
      )}

      <InputDeprecated
        value={data?.firstName}
        placeholder={t('input-firstname')}
        className={cls.input}
        readOnly={readonly}
        onChange={onChangeFirstName}
        data-testid="ProfileCard.firstname"
      />
      <InputDeprecated
        value={data?.lastName}
        placeholder={t('input-lastname')}
        className={cls.input}
        readOnly={readonly}
        onChange={onChangeLastName}
        data-testid="ProfileCard.lastname"
      />
      <InputDeprecated
        value={data?.age}
        placeholder={t('input-age')}
        className={cls.input}
        readOnly={readonly}
        onChange={onChangeAge}
        data-testid="ProfileCard.age"
      />
      <InputDeprecated
        value={data?.city}
        placeholder={t('input-city')}
        className={cls.input}
        readOnly={readonly}
        onChange={onChangeCity}
        data-testid="ProfileCard.city"
      />
      <InputDeprecated
        value={data?.username}
        placeholder={t('input-username')}
        className={cls.input}
        readOnly={readonly}
        onChange={onChangeUsername}
        data-testid="ProfileCard.username"
      />
      <InputDeprecated
        value={data?.avatar}
        placeholder={t('input-avatar')}
        className={cls.input}
        readOnly={readonly}
        onChange={onChangeAvatar}
        data-testid="ProfileCard.avatar"
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
    </VStack>
  );
});
