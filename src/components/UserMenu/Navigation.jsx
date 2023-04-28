import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "redux/Auth/authSelectors";
import { Typography } from "@mui/material";

const Navigation =()=> {
const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

return (
<nav>
   <Typography component="nav" textAlign="center" 
        sx={{mr: 2, textDecoration: 'none',color: 'inherit', display: 'block'}}>
            <NavLink to="/">Home</NavLink>
</Typography> 
{isLoggedIn && (

<Typography component="nav" textAlign="center" 
sx={{mr: 2, textDecoration: 'none',color: 'white', display: 'block'}}>
<NavLink to ="/contacts">
    Contacts
</NavLink>
</Typography>) 
}
</nav>
);
};

export default Navigation;