import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { 
  Container,
  Icon,
  Title,
} from './styles';

const icon = {
  income: 'arrow-up-circle', 
  outcome: 'arrow-down-circle',
}

interface TransactionTypeButtonProps extends TouchableOpacityProps {
  title: string;
  type: 'income' | 'outcome';
  isActive: boolean;
}

export function TransactionTypeButton({ title, type, isActive = false, ...rest }: TransactionTypeButtonProps) {
  return (
    <Container 
      isActive={isActive} 
      type={type}
      {...rest}>
      <Icon 
        name={icon[type]}
        type={type}
      />

      <Title>
        {title}
      </Title>
    </Container>
  )
}