import React, { useState } from 'react';
import './Button.scss';

const Button: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  return <>
    <p> Counter: <code>{ count }</code> </p>
    <button className="button" onClick={handleClick}>
      <i className="bi bi-plus-circle mr-2"></i>
      Increment
    </button>
  </>
}

export default Button;
