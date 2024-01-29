import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

import axios from 'axios';

export default function App() {

  const [products,setProducts]=useState([])

  const [error,setError]=useState(false)

  const [loading,setLoading]=useState(false)


  useEffect(()=>{
         
    ;(async()=>{

     try {

       setError(false)
       setLoading(true)
      const response=await axios.get('/api/products')

      setProducts(response.data)

      setLoading(false)
     } catch (error) {

       setError(error)
       setLoading(false)
       console.log("this is an error for connecting to api",error)
     }

    })()

  })
  return (
    <div>
      <h1>this is a full stack app</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Somethig went Wrong</h1>}
      <h2>no of products {products.length}</h2>
    </div>
  );
}
