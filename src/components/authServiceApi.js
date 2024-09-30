import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AUTH_REST_API_BASE_URL = "http://localhost:9191/auth"

export const registerAPICall = (registerObj) => axios.post(AUTH_REST_API_BASE_URL + '/register', registerObj);

export const loginAPICall = (usernameOrEmail, password) => axios.post(AUTH_REST_API_BASE_URL + '/login', { usernameOrEmail, password});

export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const saveLoggedInUser = (username,role) => {
    sessionStorage.setItem("authenticatedUser", username);
    sessionStorage.setItem("role",role)
}

export const isUserLoggedIn = () => {

    const username = sessionStorage.getItem("authenticatedUser");

    if(username == null) {
        return false;
    }    
    else {
        return true;
    }   
}

export const getLoggedInUser = () => {
    const username = sessionStorage.getItem("authenticatedUser");
    return username;
}

export const isAdminUser=()=>{
    const role =sessionStorage.getItem("role");
    if(role != null && role==='ROLE_ADMIN'){
        return true;
    }else{
        return false;
    }
}