import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from '../redux/Auth/authOperation';
import {TextField, Button, Typography, Box }from '@mui/material';

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
<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >

<TextField 
 label="Email"
 id="outlined-controlled"
 variant="outlined" 
  sx={{
    mr:'2rem'
  }}
  type="email" name="email" value={email} onChange={handleChange}/>
  
<TextField 
  label="Password"
  id="password"
  variant="outlined" 
  sx={{
    mr:'2rem'
  }}
  autoComplete="current-password"
  type="password" name="password" value={password} onChange={handleChange} /> 
   
   </Box>

<Button variant="outlined" size="large" sx={{mt:4}}
 type="submit">Log In</Button>

</div>
    );
};