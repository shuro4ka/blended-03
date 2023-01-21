import {useSelector} from 'react-redux'
import { selectUsers } from 'redux/users/slice'
import {deleteUser} from 'redux/users/slice';
import { useDispatch } from 'react-redux';


export const HomeTab = () => {
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();

    return  (
       <table>
        <thead>
            <tr>
                <th>N</th>
                <th>name</th>
                <th>age</th>
                <th>option</th>
            </tr>
        </thead>
        <tbody>
            {users.map(({name, age, id}, index) => {
                return (
                    <tr key={id}>
                    <th>{index +=1}</th>
                    <th>{name}</th>
                    <th>{age}</th>
                    <th>
                        <button onClick={() => {
                            dispatch(deleteUser(id));
                        }}>
                            Delete
                            </button>
                    </th>
                </tr>
                );
            })}
         </tbody>  
       </table> 
    );
};