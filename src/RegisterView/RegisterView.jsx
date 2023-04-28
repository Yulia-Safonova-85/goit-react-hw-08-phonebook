import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from '../redux/Auth/authOperation';
import {  Button, Typography,}from '@mui/material';
import {FormField} from "../components/Layout/Layout.styled";

export default function RegisterView(){
const dispatch = useDispatch();
const [name, setName] = useState('');
const [email,setEmail] = useState('');
const [password, setPassword]= useState('');

const handleChange = ({target: {name, value}}) => {
    switch(name){
        case 'name': 
        return setName(value);
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
    dispatch(authOperations.register({name,email,password}));
    setName('');
    setEmail('');
    setPassword('');
};

return(
<div>
<Typography
variant="h6"
sx={{mt:4}}
>
    Page user Registration</Typography>
    
    <FormField onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="example@email.com"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
        <Button variant="outlined" size="small" sx={{mt:4}}
 type="submit">Register</Button>
    </FormField>
</div>
);
};

