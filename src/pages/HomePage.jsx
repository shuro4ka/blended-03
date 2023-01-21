import { HomeTab } from "components/HomeTab";
import { selectUsers } from "redux/users/slice";
import { useSelector } from "react-redux";

export const HomePage = () => {
    const users = useSelector(selectUsers);

    return <>
        {users.length !== 0 
            ? <HomeTab />
        : <p>No users</p>}
    </>
};