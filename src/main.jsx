import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Showall from './components/Showall.jsx'
import Product from './components/Product.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/Shoes/' element={<App />}/>
      <Route path='product/:id/:shoe' element={<Product />}/>
      <Route path='showall/:id' element={<Showall/>}/>
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
)
