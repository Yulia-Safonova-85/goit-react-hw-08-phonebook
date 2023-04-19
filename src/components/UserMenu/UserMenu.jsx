import { useDispatch, useSelector } from "react-redux";
import {authSelectors, authOperation} from "../redux/";

export default function UserMenu(){
const dispatch=useDispatch();
const name = useSelector(authSelectors.getUserName);

return (
    <div>
       <span>Welcome, {name}😃</span> 
       <button type="button" onClick={()=>dispatch(authOperation.logOut())}>Logout</button>
    </div>
);
};