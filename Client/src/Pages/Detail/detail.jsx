import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import {useParams} from 'react-router-dom'
import Card from '../../Components/Card/card'
import axios from 'axios'
import './detail.scss'

const Detail = () => {
    const [detail,setDetail]=useState("")
    const {id}=useParams()
  
    const fetchDetail=async()=>{
        const res=await axios.get(`http://localhost:5000/${id}`)
        console.log(res.data);
        setDetail(res.data)
    }
    useEffect(()=>{
        fetchDetail()
    },[])
    console.log(detail);
  return (
    <div>
        <Helmet>
            <title>Detail Page</title>
        </Helmet>
        {detail ? <>
        <div className="detailCard">
            <Card  id={detail._id} image={detail.image} title={detail.price} price={detail.price}/>
        </div>
        </>:''}

    </div>
  )
}

export default Detail