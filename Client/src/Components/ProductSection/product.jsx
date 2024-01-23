import React, { useEffect, useState } from 'react'
import Card from '../Card/card'
import './product.scss'


const Product = () => {
    const [product,setProduct]=useState([])
    async function getProduct() {
        const data=await fetch("http://localhost:5000")
        const res=await data.json()
        console.log(res);
        setProduct(res)
        
    }
    useEffect(()=>{
        getProduct()
    },[])
  return (
    <section id='Product'>
    <div className='productArea'>
        <div className="titleProduct">
            <h1>Popular Items</h1>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
        </div>
        <div className="productCard">
            {product && product.map((item)=>(
                 <Card key={item._id} id={item._id} image={item.image} title={item.title} price={item.price} product={item}/>
            ))}
       
        </div>

    </div>
    </section>
  )
}

export default Product