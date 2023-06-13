import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import {
  Button as ButtonDeprecated,
  ButtonSize,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept,
    rate = 0,
  } = props;

  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <>
          <Text title={feedbackTitle} />
          <Input
            data-testid="RatingCard.Input"
            value={feedback}
            onChange={setFeedback}
            placeholder={t('your review')}
          />
        </>
      }
      off={
        <>
          <TextDeprecated title={feedbackTitle} />
          <InputDeprecated
            data-testid="RatingCard.Input"
            value={feedback}
            onChange={setFeedback}
            placeholder={t('your review')}
          />
        </>
      }
    />
  );

  const content = (
    <>
      <VStack align="center" gap="8">
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text title={starsCount ? t('article review thanks') : title} />}
          off={
            <TextDeprecated
              title={starsCount ? t('article review thanks') : title}
            />
          }
        />
        <StarRating
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectStars}
        />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <ToggleFeatures
              feature="isAppRedesigned"
              on={
                <HStack max gap="16" justify="end">
                  <Button
                    data-testid="RatingCard.Close"
                    onClick={cancelHandler}
                    variant="outline"
                  >
                    {t('close review')}
                  </Button>
                  <Button data-testid="RatingCard.Send" onClick={acceptHandler}>
                    {t('send review')}
                  </Button>
                </HStack>
              }
              off={
                <HStack max gap="16" justify="end">
                  <ButtonDeprecated
                    data-testid="RatingCard.Close"
                    onClick={cancelHandler}
                    theme={ButtonTheme.OUTLINE_RED}
                  >
                    {t('close review')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    data-testid="RatingCard.Send"
                    onClick={acceptHandler}
                  >
                    {t('send review')}
                  </ButtonDeprecated>
                </HStack>
              }
            />
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={cancelHandler} lazy>
          <VStack gap="32">
            {modalContent}
            <ToggleFeatures
              feature="isAppRedesigned"
              on={
                <Button onClick={acceptHandler} size="l" fullWidth>
                  {t('send review')}
                </Button>
              }
              off={
                <ButtonDeprecated
                  onClick={acceptHandler}
                  size={ButtonSize.L}
                  fullWidth
                >
                  {t('send review')}
                </ButtonDeprecated>
              }
            />
          </VStack>
        </Drawer>
      </MobileView>
    </>
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card padding="24" max data-testid="RatingCard" className={className}>
          {content}
        </Card>
      }
      off={
        <CardDeprecated data-testid="RatingCard" className={className} max>
          {content}
        </CardDeprecated>
      }
    />
  );
});
