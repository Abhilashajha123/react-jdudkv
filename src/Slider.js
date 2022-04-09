import React from 'react';
import Menu from './Menu';

export default function Slider(props) {
  return (
    <div>
      <p>slider</p>
      {props.newdata}
      <Menu />
    </div>
  );
}
