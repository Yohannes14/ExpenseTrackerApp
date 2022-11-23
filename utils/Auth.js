import axios from "axios"

const API_KEY ='AIzaSyDmM4KUSlxItuJwoUxLxaBUVP6sF_TxeA8';

async function authentication(mode, email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

   const response = await axios.post(url, {
            email: email,
            password: password,
            returnSecureToken: true
        });
        
    console.log(response.data);
}

export async function createUser(email, password){
    await authentication('signUp', email, password);
}

export async function login(email, password){
    await authentication('signInWithPassword', email, password);
}