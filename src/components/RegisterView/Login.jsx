import { useState } from "react";
import { useDispatch } from "react-redux";
import {authOperation} from '../redux/Auth/authOperation';

export default function Login(){
    const dispath = useDispatch();
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
    dispath(authOperation.logIn({email,password}));
    setEmail('');
    setPassword('');
};

    return (
<div>
<h1>LogIn Page</h1>
<form onSubmit={handleSubmit}>

<label>Email
 <input type="email" name="email" onChange={handleChange}/>   
 
</label>
<label>Password
<input type="password" name="password" onChange={handleChange} />    
</label>

<button type="submit">Log In</button>

</form>
</div>
    );
};