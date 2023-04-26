import React from "react";
import { NavLink } from "react-router-dom";

const Home = ()=> {
    <div>
        <h1>Welcome to the Phonebook</h1>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/register">Registration</NavLink>
    </div>
}

export default Home;