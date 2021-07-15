import React, { useState, useEffect } from 'react';
import './App.css';

//COMPONENTS
import CardProducts from './CardProduct';

//FIREBASE
import { db } from './firebase'

const App = () => {
  const [product, setProduct] = useState([]);


  console.log(product);

  // const getProducts = ()=> {

  //   const docs = [];

  //   db.collection('products').onSnapshot((querySnapshot)=> {
  //     querySnapshot.forEach((doc)=> {
  //       docs.push({...doc.data(), id: doc.id});
  //     })
  //     setProducts(docs);
  //   })
  // }

  const getProductWhere = () => {
    db.collection('products')
      .where('price', '==', 300)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
        });
      })
  }

  const getProduct = () => {

    const docs = [];

    db.collection('products').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        let filterItems = docs.filter(
          (itemFiltered)=> itemFiltered.id ==  '1P1TlCSkA9TJrOLt1hW3'

          );
          setProduct(filterItems);
      })
      
    })
  }


  useEffect(() => {
    getProduct();

  }, [])



  return (
    <div className="App">
      <h1>Firebase App</h1>
      {product.map((item) => {
        return (
          <div key={item.id} className='product-container'>
            <CardProducts data={item} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
