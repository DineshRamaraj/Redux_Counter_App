import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementAmount } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch();

    const addAmount = Number(amount) || 0;

    const resetAll = () =>{
        setAmount(0);
        dispatch(reset());
    }

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)}  />
            <div>
                <button onClick={() => dispatch(incrementAmount(addAmount))}>Add Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
    );
};

export default Counter;