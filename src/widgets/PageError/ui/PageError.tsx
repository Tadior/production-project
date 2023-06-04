import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/deprecated/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export function PageError(props: PropsWithChildren<PageErrorProps>) {
  const { className } = props;
  const { t } = useTranslation();
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div className={cls.PageError}>
      <p>{t('unexpected-error')}</p>
      <Button onClick={reloadPage}>{t('reload-page')}</Button>
    </div>
  );
}
