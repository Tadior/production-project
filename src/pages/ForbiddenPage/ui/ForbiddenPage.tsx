import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

function ForbiddenPage() {
  const { t } = useTranslation();

  return (
    <Page data-testid="ForbiddenPage" className={classNames('', {}, [])}>
      {t('Forbidden page')}
    </Page>
  );
}

export default memo(ForbiddenPage);
