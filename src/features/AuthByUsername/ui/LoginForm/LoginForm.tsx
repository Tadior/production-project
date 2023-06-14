import { memo, PropsWithChildren, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import cls from './LoginForm.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { VStack } from '@/shared/ui/redesigned/Stack';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo((props: PropsWithChildren<LoginFormProps>) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );
  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, onSuccess, username, password]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <VStack
            className={classNames(cls.LoginForm, {}, [className])}
            gap="16"
          >
            <Text title={t('auth-form')} />
            {error && (
              <Text text={t('wrong login or password')} variant="error" />
            )}
            <Input
              autofocus
              type="text"
              className={cls.input}
              placeholder={t('input login')}
              onChange={onChangeUsername}
              value={username}
            />
            <Input
              type="text"
              className={cls.input}
              placeholder={t('input password')}
              onChange={onChangePassword}
              value={password}
            />
            <Button
              variant="outline"
              className={cls.loginBtn}
              onClick={onLoginClick}
              disabled={isLoading}
            >
              {t('login')}
            </Button>
          </VStack>
        }
        off={
          <div className={classNames(cls.LoginForm, {}, [className])}>
            <TextDeprecated title={t('auth-form')} />
            {error && (
              <TextDeprecated
                text={t('wrong login or password')}
                theme={TextTheme.ERROR}
              />
            )}
            <InputDeprecated
              autofocus
              type="text"
              className={cls.input}
              placeholder={t('input login')}
              onChange={onChangeUsername}
              value={username}
            />
            <InputDeprecated
              type="text"
              className={cls.input}
              placeholder={t('input password')}
              onChange={onChangePassword}
              value={password}
            />
            <ButtonDeprecated
              theme={ButtonTheme.OUTLINE}
              className={cls.loginBtn}
              onClick={onLoginClick}
              disabled={isLoading}
            >
              {t('login')}
            </ButtonDeprecated>
          </div>
        }
      />
    </DynamicModuleLoader>
  );
});

export default LoginForm;
