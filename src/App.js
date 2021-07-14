import React, { useState, useEffect } from 'react';
import './App.css';

//FIREBASE
import { db } from './firebase'

const App = () => {
  const [products, setProducts] = useState([]);

  const getProducts = ()=> {
    db.collection('products').onSnapshot((querySnapshot)=> {
      console.log(querySnapshot);
    })
  }

  useEffect(()=> {
    getProducts();

  },[])



  return (
    <div className="App">
      <h1>Firebase App</h1>
    </div>
  );
}

export default App;
