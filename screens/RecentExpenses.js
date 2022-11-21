import { StyleSheet } from "react-native"
import ExpenseOutput from "../components/expensesOutput/ExpenseOutput";


const RecentExpenses = () => {
  return (
    <ExpenseOutput expensesPeriod= "Last 7 Days" />
  )
}

export default RecentExpenses;

const styles = StyleSheet .create({});