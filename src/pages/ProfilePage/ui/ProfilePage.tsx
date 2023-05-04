import { classNames } from "shared/lib/classNames/classNames";
import { PropsWithChildren } from "react";
import { Page } from "widgets/Page/Page";
import { VStack } from "shared/ui/Stack/VStack/VStack";
import { EditableProfileCard } from "features/editableProfileCard";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";


interface ProfilePageProps {
  className?: string;
}

function ProfilePage(props: PropsWithChildren<ProfilePageProps>) {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  if (!id) {
    return <Text text={t("error")} />;
  }

  return (
    <Page className={classNames("", {}, [className])}>
      <VStack max gap="16">
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
}

export default ProfilePage;
