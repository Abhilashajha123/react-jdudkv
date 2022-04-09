import React from 'react';
import './style.css';
import Header from './Header';

export default function App() {
  let x = 'abhilasha';
  let z = 'car';
  let menuname = 'home';
  return (
    <div>
      <Header x={x} z={z} />
    </div>
  );
}
