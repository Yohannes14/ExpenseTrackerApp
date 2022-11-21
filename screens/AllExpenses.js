import { useContext } from "react";
import { StyleSheet, Text } from "react-native"
import ExpenseOutput from "../components/expensesOutput/ExpenseOutput";
import { ExpensesContext } from "../store/expenses-context";


const AllExpenses = () => {
  const expenseContext = useContext(ExpensesContext)
  return (
   <ExpenseOutput  
   expenses ={expenseContext.expenses} 
   expensesPeriod= "Totals"
   fallbackText=" No registered expenses found" />
  )
}

export default AllExpenses;

const styles = StyleSheet.create({});