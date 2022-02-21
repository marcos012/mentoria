import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Counter() {
    const [contador, setContador] = useState(0);
    const [mensagem, setMensagem] = useState('');
    const [users, setUsers] = useState([]);


    useEffect(() => {
        setMensagem(`Contador alterado para ${contador}`)
        getUsers()
    }, [contador])


    function increment() {
        setContador(contador + 1)
    }

    function decrement() {
        setContador(contador - 1)
    }

    async function getUsers() {
        const response = await fetch('https://api.github.com/users');
        console.log(response);
        const data = await response.json();
        console.log(data);
        setUsers(data)
    }

    return (
        <div>
            <nav>
                <Link to="/">Counter</Link> |{" "}
                <Link to="users">Users</Link>
            </nav>
            

            <h1>{ mensagem }</h1>
            <button onClick={increment}>+</button>
            <span>{ contador }</span>
            <button onClick={decrement}>-</button>

            <ul>
                {users.map(user => <li>{user.login}</li>)}
            </ul>
        </div>
    )
}
