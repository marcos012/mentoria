import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Counter() {
    const [contador, setContador] = useState(0);
    const [mensagem, setMensagem] = useState('');


    useEffect(() => {
        setMensagem(`Contador alterado para ${contador}`)
    }, [contador])


    function increment() {
        setContador(contador + 1)
    }

    function decrement() {
        setContador(contador - 1)
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
        </div>
    )
}
