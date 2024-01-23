import React from 'react'
import './card.scss'
import { Link } from 'react-router-dom'

const Card = ({ image, title, price, id }) => {

    return (
        <div>
            <div className="cardArea">
                <div className="cardBox">
                    <div className="cardImage">
                        <img src={image} alt="" />
                    </div>
                    <div className="cardText">
                        <h3>{title}</h3>
                        <p>${price}</p>
                    </div>
                    <div className="cardDetail">
                        <div><Link to={`/${id}`}><button><i className="fa-solid fa-eye"></i></button></Link></div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Card