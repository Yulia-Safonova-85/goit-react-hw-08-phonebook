import AppBar from "components/UserMenu/AppBar";
import { Outlet } from "react-router-dom";
import { Wraper } from "./Layout.styled";


export const Layout = () => {
return(
    <Wraper>
        <AppBar/>
        <Outlet/> 
    </Wraper>
)

}