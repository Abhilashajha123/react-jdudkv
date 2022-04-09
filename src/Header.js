import React from 'react';
import './style.css';
import Slider from './Slider';
export default function Header(props) {
  console.log(props.z);
  return (
    <div>
      <h1>Hello Header</h1>
      {props.x}
      <p>Start editing to see some magic happen :)</p>
      <Slider newdata={props.z} />
    </div>
  );
}
