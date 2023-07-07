import React, { useEffect, useRef } from 'react'
import helper from './helper'
import './animate.css'

const Headersec = (props) => {
  const head = useRef(null)
  const id = props.id
  const detail = helper[id]
  useEffect(()=>{
    if(props.stop != 'stop'){
    head.current.classList.add('text')
    setTimeout(()=>{
      head.current.classList.remove('text')
    },501)
  }
  })
  return (
    <div>
        <div className='container mt-5'>
            <h1 className='text-center' ref={head} style={{fontSize:'5vw'}}>{detail.brand}</h1>
            <div className='row'>
                <div className='col text-end'>
                    <p className='text-secondary'>Size <b className='ms-3 text-dark'>US {detail.minsize} - US {detail.maxsize}</b> </p>
                </div>
                <div className='col'>
                <p className='text-secondary'>Shoe price<b className='ms-3 text-dark'>${detail.lowprice} - ${detail.highprice}</b> </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Headersec