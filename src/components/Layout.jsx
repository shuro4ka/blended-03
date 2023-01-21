import { NavigationLink } from "./App.styled";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li>
                       <NavigationLink to={"/"}>Home</NavigationLink> 
                    </li>
                    <li>
                       <NavigationLink to={"add"}>Add</NavigationLink> 
                    </li>
                </ul>
            </nav>
        </header>
        <Outlet />
        </>
    )
}