import React, { useState, useEffect } from 'react';
import './App.css';

//FIREBASE
import { db } from './firebase'

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    console.log('Getting Data');

  },[])



  return (
    <div className="App">
      <h1>Firebase App</h1>
    </div>
  );
}

export default App;
