import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import ErrorOverLay from "../components/UI/ErrorOverLay";
import IconButton from "../components/UI/IconButton";
import LoadingOverLay from "../components/UI/LoadingOverLay";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import { deleteExpense, storeExpense, updateExpense } from "../utils/http";

const ManageExpenses = ({ route, navigation }) => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
   
  const expensesContext = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;

  const isEditing = !!editedExpenseId;
 
  const selectedExpense = expensesContext.expenses.find(expense =>
    expense.id === editedExpenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : " Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    setIsSubmitting(true);
    try{
    await deleteExpense(editedExpenseId);
    expensesContext.deleteExpense(editedExpenseId);
    
    navigation.goBack();
    }catch(error){
      setError('Could not delete expense -please try again later!')
      setIsSubmitting(false);
    }
   
  }
  function cancelHandler() {
    navigation.goBack(); 
  }
  async function confirmHandler(expenseData) {
    setIsSubmitting(true);
    try{
    if(isEditing){
      expensesContext.updateExpense(editedExpenseId,expenseData);
       await updateExpense(editedExpenseId, expenseData);
    }else{
      // post requested
       const id = await storeExpense(expenseData);
      expensesContext.addExpense({ ...expenseData, id : id});
    }
   navigation.goBack();
  }catch(error){
    setError('Could not sav data -please try again later!');
    setIsSubmitting(false);
  }
  }

  if( error && !isSubmitting){
    return <ErrorOverLay  message={error}/>
  }

  if(isSubmitting){
    return <LoadingOverLay />
  }

  return (
    <View style ={styles.container}>
      <ExpenseForm 
      submitButtonLabel ={isEditing ? 'Update' : 'Add'}
      onSubmit ={confirmHandler}
       onCancel ={cancelHandler}
       defaultValues ={selectedExpense} />
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
