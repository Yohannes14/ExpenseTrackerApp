import { createContext, useReducer } from "react";


const DUMMY_EXPENSES =[
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-11-17')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 9.99,
        date: new Date('2020-11-19')
    },
    {
        id: 'e3',
        description: 'some  bananas',
        amount: 59.99,
        date: new Date('2010-11-10')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 59.99,
        date: new Date('2002-11-10')
    },
    {
        id: 'e5',
        description: 'Another boook',
        amount: 59.99,
        date: new Date('2022-11-10')
    },
    {
        id: 'e6',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-11-10')
    },
    {
        id: 'e7',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-11-10')
    },
    {
        id: 'e8',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-11-10')
    },
    {
        id: 'e9',
        description: 'A pair of ',
        amount: 59.99,
        date: new Date('2022-11-10')
    },
    {
        id: 'e10',
        description: 'A pair of t-shirt',
        amount: 99.99,
        date: new Date('2021-11-10')
    }
  ]

export const ExpensesContext = createContext({
    expenses : [],
    addExpense: ({description, amount, date})=> {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount,date}) =>{},
});

function expensesReducer(state, action){
    switch(action.type) {
        case 'ADD':
            const id =new Date().toString() + Math.random().toString();
            return [{...action.payload, id: id}, ...state]
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense) => 
            expense.id === action.payload.id);

            const updatableExpense = state[updatableExpenseIndex];
            const updateItem = {...updatableExpense, ...action.payload.data};
            const updatedExpense = [...state];
            updatedExpense[updatableExpenseIndex] = updateItem;
            return updatedExpense;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}

function ExpensesContextProvider({children}) {
    const [expensesState, dispatch] =useReducer(expensesReducer,  DUMMY_EXPENSES);

    function addExpense(expenseDate){
        dispatch({type: 'ADD', payload: expenseDate});
    }

    
    function deleteExpense(id){
        dispatch({type: 'DELETE', payload: id});
    }
    function updateExpense(id, expenseData){
        dispatch({type: 'UPDATE', payload:{id: id, data: expenseData}});
    }

    const value ={
        expenses : expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return <ExpensesContext.Provider value ={value}>{children}</ExpensesContext.Provider>
}

export default  ExpensesContextProvider;