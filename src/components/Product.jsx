import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import helper from './helper'
import './animate.css'
function Product() {
    const navigate = useNavigate()
    const [deliver,setDeliver] = useState(false)
    const ids = useParams()
    const [active,setSize] = useState(null)
    const id = ids.id
    const shoe = ids.shoe
    const details = helper[id].shoes[shoe]
    const deliverimage = helper[id]
    const imagestyle = {
        width:'30vw',
        transform:'translateY(-13vw)',
        animation:'productupp 2s'
    }
    const sizes = [6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12]
    const navdeliver = () => {
        setDeliver(true)
        setTimeout(()=>{
            navigate('/Shoes/')
        },1900)
    }
  return (
    <div>
        <div className='d-flex justify-content-center'>
        <img src={details.image} style={imagestyle}/>
        </div>
        <div className='text-center position-absolute w-100' style={{top:'45%',animation:'details 3s'}}>
        <div>
        <h1 style={{transformStyle:'upppercase'}}>{details.name}</h1>
        <h6> <b>${details.price}</b></h6>
        </div>
        <h4 className='mt-5'>CONFIRM YOUR SIZE</h4>
        <div className='d-flex justify-content-center mt-4'>
            {
                sizes.map((e,i)=>{
                    return(
                        <div key={i}>
                            <span style={{cursor:'pointer',fontWeight:`${active == e ? 'bold' : ''}`,fontSize:`${active == e ? '1.5vw' : ''}`}} onClick={()=>setSize(e)}  className='me-5'>{e}</span>
                        </div>
                    )
                })
            }
        </div>
        <button className='p-1 mt-5' onClick={navdeliver} style={{transition:'.5s',width:'300px',color:'white',backgroundColor:'#371f76',borderRadius:'30px'}}>Delivery</button>
        </div>
        {
            deliver ? 

        <div className='position-absolute top-0 d-flex justify-content-center align-items-center' style={{height:'100vh',width:'100%',background:'white'}}>
            <div style={{position:"relative"}}>
                <img src={deliverimage.image} alt=""  style={{width:'18vw',rotate:'90deg',position:'absolute',left:'16vw',bottom:'3.5vw',zIndex:1,animation:'deliverbox 2s '}}/>
                <img src="/images/deliver.png" alt="" style={{width:'40vw',animation:'delivertruck 2s '}}/>
            </div>
        </div> : ''
}
    </div>
  )
}

export default Product