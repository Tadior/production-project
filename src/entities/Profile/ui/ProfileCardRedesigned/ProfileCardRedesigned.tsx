import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Input } from '@/shared/ui/redesigned/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { Card } from '@/shared/ui/redesigned/Card';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';

export const ProfileCardRedesignedSkeleton = () => {
  return (
    <Card padding="24" max>
      <VStack gap="32">
        <HStack max justify="center">
          <Skeleton border="100%" width={128} height={128} />
        </HStack>
        <HStack gap="32" max>
          <VStack gap="16" max>
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
          </VStack>

          <VStack gap="16" max>
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation('profile');
  return (
    <HStack justify="center">
      <Text
        variant="error"
        title={t('profile-error-title')}
        text={t('profile-error-text')}
        align="center"
      />
    </HStack>
  );
};

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
  const {
    className,
    data,
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

  return (
    <Card padding="16" border="partial" max className={className}>
      <VStack gap="32">
        {data?.avatar && (
          <HStack max justify="center">
            <Avatar size={128} src={data?.avatar} />
          </HStack>
        )}
        <HStack gap="24" max>
          <VStack gap="16" max>
            <Input
              label={t('input-firstname')}
              value={data?.firstName}
              readonly={readonly}
              onChange={onChangeFirstName}
              data-testid="ProfileCard.firstname"
            />
            <Input
              label={t('input-lastname')}
              value={data?.lastName}
              readonly={readonly}
              onChange={onChangeLastName}
              data-testid="ProfileCard.lastname"
            />
            <Input
              label={t('input-age')}
              value={data?.age}
              readonly={readonly}
              onChange={onChangeAge}
              data-testid="ProfileCard.age"
            />
            <Input
              label={t('input-city')}
              value={data?.city}
              readonly={readonly}
              onChange={onChangeCity}
              data-testid="ProfileCard.city"
            />
          </VStack>
          <VStack gap="16" max>
            <Input
              label={t('input-username')}
              value={data?.username}
              readonly={readonly}
              onChange={onChangeUsername}
              data-testid="ProfileCard.username"
            />
            <Input
              label={t('input-avatar')}
              value={data?.avatar}
              readonly={readonly}
              onChange={onChangeAvatar}
              data-testid="ProfileCard.avatar"
            />
            <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readonly}
            />
            <CountrySelect
              value={data?.country}
              onChange={onChangeCountry}
              readonly={readonly}
            />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
});
