import React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { ToastContainer } from 'react-toastify';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../redux/Auth/authSelectors"
import authOperations from "../redux/Auth/authOperation";


import { Layout } from "./Layout/Layout";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "routes/PublicRoutes";

const HomeView = lazy(()=> import("../RegisterView/Home"));
const RegisterView = lazy(()=> import("../RegisterView/RegisterView"));
const Login = lazy(()=> import("../RegisterView/Login"));
const Contacts = lazy(()=> import("../RegisterView/Contacts"));

export const App = () => {
const dispatch = useDispatch();
const isRefreshing = useSelector(authSelectors.getIsRefreshing);

useEffect(()=>{
dispatch(authOperations.fetchCurrentUser());
}, [dispatch] );

  return ( 
     <> 
  {isRefreshing ? (<b>Refreshing contacts...</b>) : 
    (
<Routes>
  <Route path="/" element={<Layout/>}>
<Route index element= {
   <PublicRoute> 
    <HomeView/> 
    </PublicRoute> }/>

<Route path="/register" element={
<PublicRoute restricted> 
  <RegisterView/>
</PublicRoute>
}/>

<Route path="/login" element={
<PublicRoute restricted>
  <Login/> 
  </PublicRoute>
}/>

<Route path="/contacts" element={
<PrivateRoute>
  <Contacts />
</PrivateRoute>
} />
  </Route>

</Routes>
  )}
  <ToastContainer />
  </>
);
};
