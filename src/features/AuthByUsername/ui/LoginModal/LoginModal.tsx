import { classNames } from "shared/lib/classNames/classNames";

import type { PropsWithChildren } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import cls from "./LoginModal.module.scss";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginFormProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal(props: PropsWithChildren<LoginFormProps>) {
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      className={classNames(cls.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  );
}
