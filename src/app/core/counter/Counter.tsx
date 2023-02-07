import React, { useCallback, useReducer, useState } from 'react';
import Button from '../button/Button';
import './Counter.scss';

const initialState = {count: 0};

const reducer = (state: any, action: string) => {
  switch (action) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [msg, setMsg] = useState('');
  
  // const getCounterDouble = useCallback(() => state.count * 2, [state.count]);
  const getCounterDouble = () => state.count * 2;
  
  return (
    <>
      Counter: <code>{state.count}</code>
      <span>
        <button onClick={() => dispatch('decrement')}>
          <i className="bi bi-dash-circle mr-2"></i>
        </button>
        <button onClick={() => dispatch('increment')}>
          <i className="bi bi-plus-circle mr-2"></i>      
        </button>
      </span>

      <br/>
      <Button getDouble={getCounterDouble}/>
      <br/>

      <input type="text" onClick={(e: any) => setMsg(e.target.value)}/>
      <p>{msg}</p>
    </>
  );
}

export default Counter;
