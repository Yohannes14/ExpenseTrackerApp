import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";

const ManageExpenses = ({ route, navigation }) => {
   
  const expensesContext = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;

  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : " Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesContext.deleteExpense(editedExpenseId);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler() {
    if(isEditing){
      expensesContext.updateExpense(editedExpenseId, {
        description: 'test!!',
        amount: 70,
        date: new Date('2022-11-20'),
      });
    }else{
      expensesContext.addExpense({
        description: 'test',
        amount: 19.99,
        date: new Date('2022-11-20'),
      });
    }
    navigation.goBack();
  }

  return (
    <View style ={styles.container}>
      <ExpenseForm />
      <View style ={styles.buttons}>
        <Button style={styles.button} mode ="flat" onPress={cancelHandler}  name =" Cancel"/>
        <Button style={styles.button} onPress={confirmHandler} name ={isEditing ? 'Update': 'Add'}/>

      </View>

      {isEditing && (
        <View style ={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 24,
      backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'

  }
});
