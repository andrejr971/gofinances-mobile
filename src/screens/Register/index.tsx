import React, { useState } from 'react';
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../components/Forms/Button';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { InputForm } from '../../components/Forms/InputForm';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';

import { 
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from './styles';


type ICategory = {
  key: string;
  name: string;
}

interface IFormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup
    .string()
    .required('Nome é obrigatório'),
  amount: Yup
    .number()
    .typeError('Informe um valor númerico')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório'),
});

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState<ICategory>({
    key: 'category',
    name: 'Categoria'
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function handleTransactionTypesSelect(type: 'income' | 'outcome') {
    setTransactionType(type);
  }

  function handleOpenSelectCategory() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategory() {
    setCategoryModalOpen(false);
  }

  function handleRegisterSubmit(form: IFormData) {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo da transação')
    }
    
    if (category.key === 'category') {
      return Alert.alert('Selecione a categoria')
    }

    console.log({...form, category: category.name, transactionType})
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />

            <InputForm
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />
            
            <TransactionTypes>
              <TransactionTypeButton 
                type="income"
                title="Income" 
                onPress={() => handleTransactionTypesSelect('income')}
                isActive={transactionType === 'income'}
              />

              <TransactionTypeButton 
                type="outcome" 
                title="Outcome" 
                onPress={() => handleTransactionTypesSelect('outcome')}
                isActive={transactionType === 'outcome'}
              />
            </TransactionTypes>

            <CategorySelectButton 
              title={category.name} 
              onPress={handleOpenSelectCategory}
            />
          </Fields>
          

          <Button 
            title="Enviar" 
            onPress={handleSubmit(handleRegisterSubmit)}
          />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            closeSelectCategory={handleCloseSelectCategory}
            setCategory={setCategory}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}