import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    return (
        <div>
            <button className={classes.btn} onClick={increment}>increment</button>
            <h1>{count}</h1>
        </div>
    );
};

export default Counter;