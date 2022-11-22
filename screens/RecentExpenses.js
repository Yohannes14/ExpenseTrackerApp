import { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native"
import ExpenseOutput from "../components/expensesOutput/ExpenseOutput";
import ErrorOverLay from "../components/UI/ErrorOverLay";
import LoadingOverLay from "../components/UI/LoadingOverLay";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";


const RecentExpenses = () => {

  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
     // context api
  const expensesContext = useContext(ExpensesContext);

  useEffect(() => { 
    async function getExpenses(){
      setIsFetching(true);
      try{
      const expenses = await fetchExpenses();
      expensesContext.setExepense(expenses);
      }catch (error){
        setError('Could not fetch expense!')
      }
      setIsFetching(false);
    
    }
    getExpenses();   
  
  }, []);
  

  if(error && !isFetching) {
    return <ErrorOverLay message={error}/>
  }

  if(isFetching){
    return <LoadingOverLay />
  }

  const recentExpenses = expensesContext.expenses.filter(expense =>{
    const today = new Date();
    const date7DaysAgo =getDateMinusDays(today, 7 );
    return (expense.date >= date7DaysAgo) && (expense.date <= today);
  });
  
  return (
    <ExpenseOutput 
    expenses ={recentExpenses} 
    expensesPeriod= "Last 7 Days"
    fallbackText=" No expenses registered for the last 7 days." />
  ) 
}

export default RecentExpenses;

const styles = StyleSheet .create({});