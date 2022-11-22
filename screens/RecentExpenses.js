import { useContext, useEffect } from "react";
import { StyleSheet } from "react-native"
import ExpenseOutput from "../components/expensesOutput/ExpenseOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";


const RecentExpenses = () => {
     // context api
  const expensesContext = useContext(ExpensesContext);

  useEffect(() => { 
    async function getExpenses(){
      const expenses = await fetchExpenses();
      expensesContext.setExepense(expenses);
    
    }
    getExpenses();   
  
  }, []);

  const recentExpenses = expensesContext.expenses.filter(expense =>{
    const today = new Date();
    const date7DaysAgo =getDateMinusDays(today, 7 );
    return (expense.date >= date7DaysAgo) && (expense.date <= today);
  });
  
  return (
    <ExpenseOutput 
    expenses ={recentExpenses} 
    expensesPeriod= "Last 7 Days"
    fallbackText=" No expenses refistered for the last 7 days." />
  ) 
}

export default RecentExpenses;

const styles = StyleSheet .create({});