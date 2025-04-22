import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css
import '../styles/index.css';


import { Card } from './Card';

function BigCounter({ counter }) {
 
  const six = Math.floor(counter / 100000);
  const five = Math.floor(counter / 10000);
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);

  return (
    <Card 
      cardnumbers2={six} 
      cardnumbers3={five} 
      cardnumbers4={four} 
      cardnumbers5={three} 
      cardnumbers6={two} 
      cardnumbers7={one} 
    />
  );
}


let counter = 0;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BigCounter counter={counter} />);


setInterval(function () {
  counter++; 
  root.render(<BigCounter counter={counter} />); 
}, 1000);

