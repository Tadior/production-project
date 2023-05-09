import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { useNotifications } from "app/entities/Notification/api/notificationApi";
import { VStack } from "shared/ui/Stack";
import { NotificationItem } from "app/entities/Notification/ui/NotificationItem/NotificationItem";
import { Skeleton } from "shared/ui/Sceleton/Skeleton";
import cls from "./NotificationList.module.scss";

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props;
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 10000
  });

  if (isLoading) {
    return (
      <VStack
        gap="16"
        max
        className={classNames(cls.NotificationList, {}, [className])}
      >
        <Skeleton width="100%" border="8px" height="80px" />
      </VStack>
    );
  }

  return (

    <VStack
      gap="16"
      max
      className={classNames(cls.NotificationList, {}, [className])}
    >
      {data?.map(item => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>

  );
});