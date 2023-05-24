import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { Avatar } from '@/shared/ui/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';

import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

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
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack
        justify="center"
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack justify="center" className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('profile-error-title')}
          text={t('profile-error-text')}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <HStack max justify="center" className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} />
        </HStack>
      )}

      <Input
        value={data?.firstName}
        placeholder={t('input-firstname')}
        className={cls.input}
        readOnly={readonly}
        onChange={onChangeFirstName}
        data-testid="ProfileCard.firstname"
      />
      <Input
        value={data?.lastName}
        placeholder={t('input-lastname')}
        className={cls.input}
        readOnly={readonly}
        onChange={onChangeLastName}
        data-testid="ProfileCard.lastname"
      />
      <Input
        value={data?.age}
        placeholder={t('input-age')}
        className={cls.input}
        readOnly={readonly}
        onChange={onChangeAge}
        data-testid="ProfileCard.age"
      />
      <Input
        value={data?.city}
        placeholder={t('input-city')}
        className={cls.input}
        readOnly={readonly}
        onChange={onChangeCity}
        data-testid="ProfileCard.city"
      />
      <Input
        value={data?.username}
        placeholder={t('input-username')}
        className={cls.input}
        readOnly={readonly}
        onChange={onChangeUsername}
        data-testid="ProfileCard.username"
      />
      <Input
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
}
