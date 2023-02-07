import React, { useEffect, useState } from 'react';
import './Button.scss';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({getDouble}: ButtonProps) => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if count changes

  return <>
    <button className="button" onClick={() => {setCount(count + 1);}}>
      <i className="bi bi-plus mr-2"></i>
      Add Click
    </button>

    <p>{getDouble()}</p>
  </>
}

export default Button;
