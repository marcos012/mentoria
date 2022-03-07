import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/docks/Counter/action';

export default function Counter() {
    const { count } = useSelector(state => state.counter);
    const dispatch = useDispatch();


    function incrementCounter() {
        dispatch(increment())
    }

    function decrementCounter() {
        dispatch(decrement())

    }

    return (
        <div>
            <button onClick={incrementCounter}>+</button>
            <span>{ count }</span>
            <button onClick={decrementCounter}>-</button>
        </div>
    )
}
