import {LinkWraper, StyledNav} from "../Layout/Layout.styled";
import React from "react";


export default function AuthNav(){
return (
    <LinkWraper>
<StyledNav to="/register">
        Register
      </StyledNav>
      <StyledNav to="/login">
        Log In
      </StyledNav>

    </LinkWraper>

)

};

