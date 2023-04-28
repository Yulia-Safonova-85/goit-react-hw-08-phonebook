import { useDispatch, useSelector } from "react-redux";
import authSelectors from "redux/Auth/authSelectors";
import authOperations from "redux/Auth/authOperation";
import { Typography, Button } from "@mui/material";


export default function UserMenu(){
const dispatch = useDispatch();
const name = useSelector(authSelectors.getUserName);

return (
    <div>
       <Typography variant="h6">Welcome, {name}😃</Typography> 
       <Button variant="text"
        color="error" 
        onClick={()=>dispatch(authOperations.logOut())}>Logout
       </Button>
    </div>
);
};