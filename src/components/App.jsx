import React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { ToastContainer } from 'react-toastify';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import authOperations from "redux/Auth/authOperation";
import authSelectors from "redux/Auth/authSelectors";

import { Layout } from "./Layout/Layout.styled";
const HomeView = lazy(()=> import("./RegisterView/Home"));
const RegisterView = lazy(()=> import("./RegisterView/RegisterView"));
const Login = lazy(()=> import("./RegisterView/Login"));
const Contacts = lazy(()=> import("./RegisterView/Contacts"));

export const App = () => {
const dispatch = useDispatch();

useEffect(()=>{
dispatch(fetchContacts());
}, [dispatch] );

  return (
    <>
<Routes>
  <Route path="/" element={<Layout/>}>
<Route index element= {<HomeView/>}/>
<Route path="/register" element={<RegisterView/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/contacts" element={<Contacts/>}/>
  </Route>
</Routes>
<ToastContainer />
  </>
  );
};
