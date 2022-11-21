import React from 'react'
import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummarty from './ExpensesSummarty';


const DUMMY_EXPENSES =[
  {
      id: 'e1',
      description: 'A pair of shoes',
      amount: 59.99,
      date: new Date('2022-11-10')
  },
  {
      id: 'e2',
      description: 'A pair of trousers',
      amount: 9.99,
      date: new Date('2020-11-10')
  },
  {
      id: 'e3',
      description: 'some  bananas',
      amount: 59.99,
      date: new Date('2010-11-10')
  },
  {
      id: 'e4',
      description: 'A book',
      amount: 59.99,
      date: new Date('2002-11-10')
  },
  {
      id: 'e5',
      description: 'Another boook',
      amount: 59.99,
      date: new Date('2022-11-10')
  },
  {
      id: 'e6',
      description: 'A pair of shoes',
      amount: 59.99,
      date: new Date('2022-11-10')
  },
  {
      id: 'e7',
      description: 'A pair of shoes',
      amount: 59.99,
      date: new Date('2022-11-10')
  },
  {
      id: 'e8',
      description: 'A pair of shoes',
      amount: 59.99,
      date: new Date('2022-11-10')
  },
  {
      id: 'e9',
      description: 'A pair of ',
      amount: 59.99,
      date: new Date('2022-11-10')
  },
  {
      id: 'e10',
      description: 'A pair of t-shirt',
      amount: 99.99,
      date: new Date('2021-11-10')
  }
]

const ExpenseOutput = ({expenses, expensesPeriod}) => {
  return (
    <View style ={styles.container}>
      <ExpensesSummarty expenses ={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses ={DUMMY_EXPENSES} />
     
    </View>
  )
}

export default ExpenseOutput;

const styles =StyleSheet.create({
   container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
   }
});