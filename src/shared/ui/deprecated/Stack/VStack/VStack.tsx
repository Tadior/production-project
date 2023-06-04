import { memo } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;
/*
 *@deprecated
 */
export const VStack = memo((props: VStackProps) => {
  const { align = 'start' } = props;

  return <Flex direction="column" {...props} align={align} />;
});
