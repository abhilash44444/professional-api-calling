
import express, { request } from "express";

const app = express()


const port = process.env.PORT || 6000;


app.get('/api/products', (req, res) => {

    const product = [

        {
            id: 1,
            name: 'car1',
            price: 1000000,
            image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600'
        },

        {
            id: 2,
            name: 'car2',
            price: 10000000,
            image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 3,
            name: 'car3',
            price: 100000000,
            image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 4,
            name: 'car4',
            price: 100000000,
            image: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 5,
            name: 'car5',
            price: 100000000,
            image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 6,
            name: 'car6',
            price: 100000000,
            image: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 7,
            name: 'car7',
            price: 100000000,
            image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 8,
            name: 'car8',
            price: 100000000,
            image: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 9,
            name: 'car9',
            price: 100000000,
            image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 10,
            name: 'car10',
            price: 100000000,
            image: 'https://images.pexels.com/photos/39501/lamborghini-brno-racing-car-automobiles-39501.jpeg?auto=compress&cs=tinysrgb&w=600'
        }


    ]

     if(request.query.search){

         filterProducts=product.filter((products)=>products.name.includes(request.query.search))

       res.send(filterProducts)    
       return ;
     }
      
    setTimeout(()=>{
        res.send(product)
    },3000)
   
})



 app.listen(port,()=>{

     console.log(`app is listening at port  http://localhost:6000/api/products ${port}`)
 })