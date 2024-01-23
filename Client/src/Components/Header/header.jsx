import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <section id='header'>
    <div className='header'>
        <div className="textHeader">
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat magnam consectetur quis eaque est aperiam.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt non inventore laborum eum, error id.</p>

            <div><button className='headreBtn'>Shop Now</button></div>
        </div>
        <div className="imageHeader">
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png" alt="" />
        </div>

    </div> 
    </section>
  )
}

export default Header