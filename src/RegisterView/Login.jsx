import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from '../redux/Auth/authOperation';
import { Button, Typography }from '@mui/material';
import {FormField} from "../components/Layout/Layout.styled";

export default function Login(){
    const dispatch = useDispatch();
    const [email,setEmail] = useState('');
    const [password, setPassword]= useState('');

const handleChange = ({target: {name, value}}) => {
    switch(name){
        case 'email':
            return setEmail(value);
            case 'password':
                return setPassword(value);
                default:
                    return;
    }
};

const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(authOperations.logIn({email,password}));
    setEmail('');
    setPassword('');
};

    return (
<div>
<Typography
variant="h6"
sx={{mt:4}}
>LogIn Page</Typography>
<FormField onSubmit={handleSubmit} autoComplete="off">

<input 
  type="email" name="email" value={email} placeholder="example@email.com" onChange={handleChange}/>
  
<input 
  type="password" name="password" value={password} placeholder="password" onChange={handleChange} /> 
   
<Button variant="outlined" size="small" sx={{mt:4}}
 type="submit">Log In</Button>
</FormField>
</div>
    );
};