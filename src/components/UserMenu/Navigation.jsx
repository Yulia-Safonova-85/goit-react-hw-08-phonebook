import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "redux/Auth/authSelectors";

const Navigation =()=> {
const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

return (
<nav>
<NavLink to="/">Home</NavLink>
{isLoggedIn && (
<NavLink to ="/contacts">
    Contacts
</NavLink>) 
}
</nav>
);
};

export default Navigation;