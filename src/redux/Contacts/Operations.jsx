import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { errorToast, successToast} from "components/Notification";

export const fetchContacts = createAsyncThunk(
"contacts/fetchContacts",
async (_,thunkAPI)=> {
    try{
        const response = await axios.get("/contacts");
        return response.data;
    } catch(error){
        errorToast('...Something get wrong');
        return thunkAPI.rejectWithValue(error.message);
    }
}
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async(contact, thunkAPI) => {
        
    try {
        const response = await axios.post("/contacts", contact)
        return response.data;
    } catch (error) {
        errorToast('...Something get wrong');
 return thunkAPI.rejectWithValue(error.message);
    }
}
);

export const deleteContact = createAsyncThunk (
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            successToast('You have already delite contact');
            return response.data
        }catch (error) {
            errorToast('...Something get wrong');
            return thunkAPI.rejectWithValue(error.message);
               }
    }
)