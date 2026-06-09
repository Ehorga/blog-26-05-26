import React from 'react';
import Spinner from '../Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';

const UsersList = () => {
    const dispatch = useDispatch();
    const { users, isPending, error } = useSelector((state) => state.users);
    if(error) {
        return <p>{error}</p>
    }
    if(isPending) {
        return 
        <Spinner />
    }
    return (users.length === 0) ? <p>No users</p> : (
        <section>
           LIst
        </section>
    );
}

export default UsersList;
