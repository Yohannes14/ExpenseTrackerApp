import axios from "axios";
export function storeExpense(expenseDate) {
    axios.post(
        'https://react-native-course-a74ef-default-rtdb.firebaseio.com/expenses.json',
        expenseDate
    );
}