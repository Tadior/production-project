import { memo } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;
/*
 *@deprecated
 */
export const HStack = memo((props: HStackProps) => {
  const { className } = props;

  return <Flex direction="row" {...props} />;
});
