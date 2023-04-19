import { useState } from "react";
import { useDispatch } from "react-redux";
import {authOperation} from '../redux/Auth/authOperation';

export default function RegisterView(){
const dispath = useDispatch();
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
    dispath(authOperation.register({name,email,password}));
    setName('');
    setEmail('');
    setPassword('');
};

return(
<div>
<h1>Page user Registration</h1>

<form onSubmit={handleSubmit} autoComplete="off">

<label> Name
<input type="text" name="name" value={name} onChange={handleChange} />
</label>

<label>Email
 <input type="email" name="email" onChange={handleChange}/>   
 
</label>
<label>Password
<input type="password" name="password" onChange={handleChange} />    
</label>

<button type="submit">Registration</button>
</form>
</div>
);
};