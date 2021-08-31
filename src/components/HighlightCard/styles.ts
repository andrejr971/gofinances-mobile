import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface IconTypesProps {
  type: 'income' | 'outcome' | 'total';
}

const icon = {
  income: css`
    color: ${({ theme }) => theme.colors.success};
  `, 
  outcome:  css`
    color: ${({ theme }) => theme.colors.attention};
  `,
  total:  css`
    color: ${({ theme }) => theme.colors.shape};
  `,
}


export const Container = styled.View<IconTypesProps>`
  background: ${({ theme, type }) => type === 'total' ? theme.colors.secondary : theme.colors.shape};

  width: ${RFValue(300)}px;
  border-radius: 5px;
  
  padding: 19px 23px ${RFValue(42)}px;
  margin-right: 16px;

`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<IconTypesProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;

export const Icon = styled(Feather)<IconTypesProps>`
  font-size: ${RFValue(40)}px;

  ${({ type }) => icon[type]}
`;

export const Footer = styled.View``;

export const Amount = styled.Text<IconTypesProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;

export const LastTransaction = styled.Text<IconTypesProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text};
`;
