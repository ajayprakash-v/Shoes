import React, { useEffect, useRef, useState } from 'react'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import helper from './helper'
import './animate.css'
import { useNavigate } from 'react-router-dom'
const Shoesmenu = (props) => {
    const [id,setid] = useState(0)
    const [move,setMove] = useState(0)
    const [navigateclass,setNavigate] = useState(false)
    const Navi = useNavigate()
    const imagestyle = {
        width:'18vw',
        height:'24vw',
        marginRight:'20vw',
        boxShadow:'20px 20px 10px lightgray',
        cursor:'pointer'
    }
    const handleRight = () => {
        setid(id == 5 ? 0 : id+1)
        setMove(id==5 ? 0: move + 512)
        
    }
    const handleLeft = () => {
        setid(id == 0 ? 0 : id-1 )
        setMove(move== 0 ? 0 : move - 512)

    }
    const navigate =() => {
        setNavigate(true)
        setTimeout(()=>{
            Navi(`/showall/${id}`)
        },600)
    }
    const fade =() => {
       
    }
    useEffect(()=>{
        props.getshoeid(id)
    },[id])
    
  return (
    <div style={{width:'100%',overflow:'hidden'}}>
        <div className='d-flex w-100 justify-content-between text-secondary' style={{fontSize:'5vw',opacity:.5}}>
            <AiOutlineLeft onClick={handleLeft} style={{transition:'1s',cursor:'pointer'}} className={navigateclass ? 'left': ''}/>
            <AiOutlineRight onClick={handleRight} style={{transition:'1s',cursor:'pointer'}} className={navigateclass ? 'right': ''}/>
        </div>
        <div style={{transform:`translateX(-${move}px)`,transition:'1s',animation:'introtop 1s'}} className={navigateclass ? 'navigateanimation': ''} >
        <div className='d-flex ms-4' style={{marginTop:'8vw',paddingLeft:'512px'}}>
            {
               helper.map((e,i)=>{
                    return(
                        <div key={i} style={{rotate:i==id ? '30deg' : '',transition:'.5s',}}  onClick={navigate} >
                        <img src={e.image} alt="" style={imagestyle}/>
                        </div>
                    )
                })
            }
        </div>
        </div>
    </div>
  )
}

export default Shoesmenu