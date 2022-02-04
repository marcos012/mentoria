import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserCard from '../../components/UserCard/UserCard';
import './styles.css';

export default function UsersList() {
    const [users, setUsers] = useState([]);

    const navigation = useNavigate();

    useEffect(() => {
        async function getUsers() {
            const response = await fetch('https://api.github.com/users')
            const data = await response.json()
            setUsers(data)
        }

        getUsers()
    }, []);

    function handleNavigateToDetail(username) {
        navigation(`/user/${username}`)
    }

    return (
        <div>
            <nav>
                <Link to="/">Counter</Link> | {" "}
                <Link to="users">Users</Link>
            </nav>

            <h1>Usuarios</h1>

            <div className="users-container">
                {users.map(user => (
                  <UserCard user={user} key={user.id} onClick={() => handleNavigateToDetail(user.login)} />
                ))}
            </div>
        </div>
    )
}
