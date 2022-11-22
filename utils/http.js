import axios from "axios";
import { baseURL } from "./baseURL";

export async function storeExpense(expenseData) {
    const response = await axios.post(baseURL + '/expenses.json', expenseData);
    const id = response.data.name;
    return id;
}

export async function fetchExpenses(){
    const response = await axios.get(baseURL + '/expenses.json');
    const expenses = [];
    for(const key in response.data){
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description,
        };
        expenses.push(expenseObj);
    }
    return expenses;


}