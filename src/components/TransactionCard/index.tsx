import React from 'react';
import { View } from 'react-native';

import { 
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from './styles';

type ICategoryProps = {
  name: string;
  icon: string;
}

export type IDataProps = {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: ICategoryProps;
  date: string;
}

interface TransactionCardProps {
  data: IDataProps;
}

export function TransactionCard({ data }: TransactionCardProps) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === 'negative' && '-'} 
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>

        <Date>
          {data.date}
        </Date>
      </Footer>
    </Container>
  );
}
;