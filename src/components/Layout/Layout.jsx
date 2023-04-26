import AppBar from "components/UserMenu/AppBar";
import { Outlet } from "react-router-dom";
import { Wraper } from "./Layout.styled";
import { Suspense } from "react";
import { Loader } from "components/Loader/Loader";


export const Layout = () => {
return(
    <Wraper>
        <AppBar/>
        <main>
        <Suspense fallback={<Loader/>}>
        <Outlet/>
        </Suspense>
        </main>
    </Wraper>
)
};