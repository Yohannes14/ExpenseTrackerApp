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
  function confirmHandler(expenseDate) {
    if(isEditing){
      expensesContext.updateExpense(editedExpenseId,expenseDate);
    }else{
      expensesContext.addExpense(expenseDate);
    }
    navigation.goBack();
  }

  return (
    <View style ={styles.container}>
      <ExpenseForm 
      submitButtonLabel ={isEditing ? 'Update' : 'Add'}
      onSubmit ={confirmHandler}
       onCancel ={cancelHandler} />
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
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'

  }
});
