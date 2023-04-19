import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
    set(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset(){
        axios.defaults.headers.common.Authorization = ''; 
    }
};

export const register = createAsyncThunk(
"auth/register",
async (credentials)=> {
    try{
        const response = await axios.post("/users/signup",credentials);
        token.set(response.data.token);
        return response.data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.message);
    }
}
);

export const logIn= createAsyncThunk("auth/login", async credentials =>{
    try{
        const response = await axios.post("/users/login",credentials);
        token.set(response.data.token);
        return response.data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.message);
    } 
    }
);

export const logOut = createAsyncThunk("auth/logout", async ()=> {
    try {
        await axios.post("/users/logout");
        token.unset();
    } catch(error){
        return error.message;
    }
})