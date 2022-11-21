import { StyleSheet, Text } from "react-native"
import ExpenseOutput from "../components/expensesOutput/ExpenseOutput";


const AllExpenses = () => {
  return (
   <ExpenseOutput expensesPeriod= "Totals" />
  )
}

export default AllExpenses;

const styles = StyleSheet.create({});