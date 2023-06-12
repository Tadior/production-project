import { PropsWithChildren, Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Modal } from '@/shared/ui/redesigned/Modal';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginFormProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal(props: PropsWithChildren<LoginFormProps>) {
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
}
