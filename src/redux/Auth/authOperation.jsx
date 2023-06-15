import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset(){
        axios.defaults.headers.common.Authorization = ''; 
    }
};

 const register = createAsyncThunk(
"auth/register",
async (credentials,thunkAPI)=> {
    try{
        const response = await axios.post("/users/signup", credentials);
        token.set(response.data.token);
        return response.data;
    } catch(error){
        toast.info("This user is already registered", {
            position: toast.POSITION.TOP_RIGHT
          });
        return thunkAPI.rejectWithValue(error.message);
    }
}
);

 const logIn= createAsyncThunk("auth/login", async (credentials,thunkAPI) =>{
    try{
        const response = await axios.post("/users/login",credentials);
        token.set(response.data.token);
        return response.data;
    } catch(error){
        toast.info("Incorrect login or password", {
            position: toast.POSITION.TOP_RIGHT
          });
        return thunkAPI.rejectWithValue(error.message);
    } 
    },
);

 const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI)=> {
    try {
        await axios.post("/users/logout");
        token.unset();
    } catch(error){
        return thunkAPI.rejectWithValue(error.message);
    }
}
);

const fetchCurrentUser = createAsyncThunk("auth/refresh", 
async (_, thunkAPI)=>{
const state = thunkAPI.getState();
const persistedToken = state.auth.token;

if (persistedToken === null){
    return thunkAPI.rejectWithValue();
}
try {
    token.set(persistedToken); 
    const response = await axios.get("/users/current");
   return response.data;
} catch(error){
    return thunkAPI.rejectWithValue(error.message);
}
})

const authOperations = {
    register, 
    logIn,
    logOut,
    fetchCurrentUser,
};

export default authOperations;

