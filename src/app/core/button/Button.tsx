import React, { useState } from 'react';
import './Button.scss';

const Button: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  return <>
    <p> Counter { count }</p>
    <button className="button" onClick={handleClick}>Increment</button>
  </>
}

export default Button;
