import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";

import { useSelector } from "react-redux";
import {authSelectors} from "../redux/Auth";


export default function AppBar(){
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

return (
    <header>
        <Navigation/>
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </header>
);
};