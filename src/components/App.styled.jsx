import styled from "styled-components";
import  { NavLink } from "react-router-dom";

export const NavigationLink = styled(NavLink)`
   text-decoration: none;
   font-size: 22px;
    .active{
        color: red;
    }
`;