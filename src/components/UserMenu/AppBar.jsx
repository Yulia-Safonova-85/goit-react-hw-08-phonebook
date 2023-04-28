import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import authSelectors from "redux/Auth/authSelectors";
import { ContactPhoneTwoTone } from "@mui/icons-material";


export default function Header(){
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

return (
    <AppBar position="static">
        <Toolbar>
            <IconButton size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
                <ContactPhoneTwoTone/>
            </IconButton>
            <Typography>
                My PhoneBook
            </Typography>   
        <Typography variant="h6"
            noWrap
            component="nav"
            textAlign="center"
            sx={{flexGrow: 1,
            mr: 2,
            textDecoration: 'none',
            color: 'inherit'}}><Navigation/>
            </Typography> 
        {isLoggedIn ? 
        <Typography
        component="nav"
       > <UserMenu/></Typography> 
         : 
         <Typography
        component="nav"
        > <AuthNav/> </Typography>
         }
      </Toolbar>
    </AppBar>
);
};