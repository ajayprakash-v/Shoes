import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Headersec from './Headersec'
import helper from './helper'
import './animate.css'
import {IoMdClose} from 'react-icons/io'
const Showall = () => {
    const navigate = useNavigate() 
    const [intro,setclose] = useState('intro')
    const id = useParams()
    const details = helper[id.id]
    const imagestyle = {
      width:'18vw',
      position:'absolute',
      top:'-5vw',
      right:'-5vw',
      rotate:'-120deg',
      animation:`${intro} 1s`,
      zIndex:1
    }
    const navback = () => {
      setclose('close')
      setTimeout(()=>{
        navigate('/')
      },989)
    }
    const colors = ['#e25b45','#ff8357','#fac172','#89d5c9','#adc865']
    const handleProduct = (e) => {
      setclose('close')
      setTimeout(()=>{
        navigate(`/product/${id.id}/${e}`)
      },800)
    }
  return (
    <div >
        <Headersec id={id.id} stop='stop'/>
        <div >
            <img src={details.image} style={imagestyle}/>
            <IoMdClose style={{fontSize:'3vw',animation:'fade 3s ',position:'absolute',cursor:'pointer',zIndex:2,right:'7vw',color:'white'}} onClick={navback}/>            
        </div>
        <div className=' d-flex justify-content-around' style={{width:'80%',marginTop:'5vw',cursor:'pointer'}}>
          {
            details.shoes.map((e,i)=>{
              return(
                <div key={i} className='shoes' style={{animation:`${intro === 'close' ? `downn ${i==0 ? 1 : i*1 }s`  :`upp ${i==0 ? 1 : i*.5 }s` }`,transition:'1s'}}>
                  <img src={e.image} onClick={()=> handleProduct(i)} className='mb-3' style={{width:'15vw',backgroundColor:`${colors[Math.floor(Math.random()*5)]}`,borderRadius:'30px',boxShadow:'10px 10px 10px lightgray',}}/> <br/>
                  <span className='ms-3'><b>${e.price}</b></span>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Showall