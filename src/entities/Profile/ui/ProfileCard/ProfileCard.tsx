import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

import { Profile } from '../../model/types/profile';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import {
  ProfileCardDeprecated,
  ProfileCardDeprecatedError,
  ProfileCardDeprecatedLoader,
} from '../ProfileCardDeprecated/ProfileCardDeprecated';
import {
  ProfileCardRedesigned,
  ProfileCardRedesignedError,
  ProfileCardRedesignedSkeleton,
} from '../ProfileCardRedesigned/ProfileCardRedesigned';

export interface ProfileCardProps {
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
  const { isLoading, error } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<ProfileCardRedesignedSkeleton />}
        off={<ProfileCardDeprecatedLoader />}
      />
    );
  }

  if (error) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<ProfileCardRedesignedError />}
        off={<ProfileCardDeprecatedError />}
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ProfileCardRedesigned {...props} />}
      off={<ProfileCardDeprecated {...props} />}
    />
  );
}
