import { useLayoutEffect } from "react";
import { StyleSheet, Text } from "react-native"


const ManageExpenses = ({route, navigation}) => {
 const editedExpenseId = route.params?.expenseId;

 const isEditing = !!editedExpenseId;

 useLayoutEffect(() => {
  navigation.setOptions({
    title: isEditing ? 'Edit Expense': ' Add Expense'
   });
 
 },[navigation, isEditing]);


  return (
    <Text>ManageExpenses</Text>
  )
}

export default ManageExpenses;

const styles = StyleSheet.create({});