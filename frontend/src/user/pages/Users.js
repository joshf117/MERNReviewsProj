import React from 'react'
import UsersList from '../components/UsersList.js'
const Users = () => {

    const USERS = [{ id: 'u1', name: 'josh', image: 'https://picsum.photos/id/1000/5626/3635', places: 3 }];


    return <UsersList items={USERS} />
};

export default Users