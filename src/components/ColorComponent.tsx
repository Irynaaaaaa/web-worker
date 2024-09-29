import React, { useState } from 'react';

import './styles.css';

const ColorComponent = () => {
  const [color, setColor] = useState('red');
  const changeColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    setColor(`rgb(${red}, ${green}, ${blue})`);
  };
  return (
    <div>
      <div className="colorBlock" style={{ backgroundColor: color }}>
        <span>{color}</span>
      </div>
      <button onClick={changeColor}>change color</button>
    </div>
  );
};

export default ColorComponent;
