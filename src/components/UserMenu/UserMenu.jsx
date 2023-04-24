import { useDispatch, useSelector } from "react-redux";
import authSelectors from "redux/Auth/authSelectors";
import authOperations from "redux/Auth/authOperation";


export default function UserMenu(){
const dispatch = useDispatch();
const name = useSelector(authSelectors.getUserName);

return (
    <div>
       <span>Welcome, {name}😃</span> 
       <button type="submit" onClick={()=>dispatch(authOperations.logOut())}>Logout</button>
    </div>
);
};