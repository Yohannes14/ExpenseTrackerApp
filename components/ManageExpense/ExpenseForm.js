import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../UI/Button";
import Input from "./Input";

const ExpenseForm = ({submitButtonLabel, onCancel, onSubmit }) => {
  const [inputValue, setInputValue] = useState({
    amount : '',
    date: '',
    description: ''
  });

  function inputChangeHnadler(inputIndetifier, enteredInput) {
    setInputValue((currentValues) => {
        return {
            ...currentValues, [inputIndetifier]: enteredInput
        };
    });
  }

  function submitHandler(){
    const expenseDate = {
        amount: +inputValue.amount,
        date: new Date(inputValue.date),
        description: inputValue.description
    };
    onSubmit(expenseDate);

  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHnadler.bind(this, 'amount'),
            value: inputValue.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHnadler.bind(this, 'date'),
            value: inputValue.date
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCapitalize: 'none'
          // autoCorrent: false
          onChangeText: inputChangeHnadler.bind(this, 'description'),
            value: inputValue.description
        }}
      />
        <View style ={styles.buttons}>
        <Button style={styles.button} mode ="flat" onPress={onCancel}  name =" Cancel"/>
        <Button style={styles.button} onPress={submitHandler} name ={submitButtonLabel}/>

      </View>
    </View>
  );
};

export default ExpenseForm;
const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginHorizontal: 24,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
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
});
