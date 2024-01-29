import { useEffect, useState } from 'react'


import './App.css'
import axios from 'axios'

function App() {
  const [products,setProducts ] = useState([])
  const [error,setError]=useState(false)

  const [loading,setLoading]=useState(false)

   
  useEffect(()=>{

    ;(async()=>{
           
    try {
      setError(false)
      setLoading(true)
      const product=await axios.get('/api/products')
      setProducts(product.data)

      setLoading(false)
    } catch (error) {
       
       setError(true)
       setLoading(false)
    }



    })()
  })

  return (
    <>


      {loading && <h1> Loading...</h1>}
      {error && <h1> Something went Wrong</h1>}
      <h1> no of products is {products.lenght} </h1>
    </>
  )
}

export default App
