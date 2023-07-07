import React, { useEffect, useState } from 'react'
import helper from './components/helper'
import Headersec from './components/Headersec'
import Shoesmenu from './components/Shoesmenu'
const App = () => {
  const [shoeid,setId] = useState(0)
  const getshoeid = (id) => {
    setId(id)
  }
  
  return (
    <div style={{height:'100vh',overflow:'hidden'}}>
      <Headersec id={shoeid}/>
      <Shoesmenu getshoeid={getshoeid}/>
    </div>
  )
}

export default App