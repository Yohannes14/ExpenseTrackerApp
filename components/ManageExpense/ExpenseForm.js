import { StyleSheet, View } from "react-native"
import Input from "./Input";

const ExpenseForm = () => {

    function amountChangeHnadler(){}
    function dateChangeHnadler(){}

  return (
    <View>
    <Input label ="Amount" textInputConfig={{
        keyboardType: 'decimal-pad',
        onChangeText: amountChangeHnadler,
    }} />
    <Input label ="Date" textInputConfig={{
        placeholder: 'YYYY-MM-DD',
        maxLength: 10,
        onChangeText:()=>{},
    }}/>
    <Input label ="Description" textInputConfig={{
        multiline: true,
        // autoCapitalize: 'none'
        // autoCorrent: false
    }}/>
    </View>
  )
}

export default ExpenseForm;
const styles = StyleSheet.create({});