import React from 'react';
import './color.css';
import './display.css';

const ColorDispaly = props => {
  return (
    <div className="box">

      <p>{props.theColor}</p>

    </div>
  );
};

export default ColorDispaly;
