import { StyleSheet, Text, View } from "react-native"
import { GlobalStyles } from "../../constants/styles";

const ExpensesSummarty = ({expenses, periodName}) => {

    const expenseSum = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return (
    <View style ={styles.container}>
      <Text style ={styles.period}>{periodName}</Text>
      <Text>{expenseSum.toFixed(2)} birr</Text>
      </View>
  )
}

export default ExpensesSummarty;

const styles =StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400
  },
  sum :{
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500
  }
});