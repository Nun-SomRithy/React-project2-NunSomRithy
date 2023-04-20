import React from "react";
import Productcard from './components/Productcard';
import { useState, useEffect } from 'react';


function App() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data); 
      })
  }, []);

  
  return (
    <>
      <Productcard products={products} />
    </>
  );
}

export default App;

