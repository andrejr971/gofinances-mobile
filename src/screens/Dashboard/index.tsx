import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, IDataProps } from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList
} from './styles';

export interface ITransactionListProps extends IDataProps {
  id: string;
}

export function  Dashboard() {
  const data: ITransactionListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: "06/07/2021",
    },
    {
      id: '2',
      type: 'negative',
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      },
      date: "06/07/2021",
    },
    {
      id: '3',
      type: 'negative',
      title: "Aluguel do apartamento",
      amount: "R$ 1.200,00",
      category: {
        name: 'Casa',
        icon: 'shopping-bag'
      },
      date: "06/07/2021",
    }
  ];

  return (
    <Container>
      <Header >
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{ uri: 'https://avatars.githubusercontent.com/u/49952031?v=4' }}
            />

            <User>
              <UserGreeting>Olá</UserGreeting>
              <UserName>André</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>

      </Header>
    
      <HighlightCards>
        <HighlightCard 
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada 29 de Junho"
          type="income"
        />
        <HighlightCard 
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída 29 de Junho"
          type="outcome"
        />
        <HighlightCard 
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 29 de Junho"
          type="total"
        />
      </HighlightCards>
    
      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
