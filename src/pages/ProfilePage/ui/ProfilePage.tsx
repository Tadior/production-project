import { PropsWithChildren } from 'react';
import { useParams } from 'react-router-dom';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/editableProfileCard';

interface ProfilePageProps {
  className?: string;
}

function ProfilePage(props: PropsWithChildren<ProfilePageProps>) {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  return (
    <Page data-testid="ProfilePage" className={classNames('', {}, [className])}>
      <VStack max gap="16">
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
}

export default ProfilePage;
