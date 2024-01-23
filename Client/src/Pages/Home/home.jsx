import React from 'react'
import { Helmet } from 'react-helmet-async'
import Product from '../../Components/ProductSection/product'
import Header from '../../Components/Header/header'

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>Home Page</title>
        </Helmet>
        <div>
          <Header/>
          <Product/>
        </div>
    </div>
  )
}

export default Home