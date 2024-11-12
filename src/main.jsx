import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import {App} from './App.jsx'
import { ScrollToTop } from './components/index.jsx'
import { FilterProvider } from './context/FilterContext.jsx'
import { CartProvider } from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Router  future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}> 
      <CartProvider>
      <FilterProvider >
       <ScrollToTop/>
       <ToastContainer/>
         <App />
      </FilterProvider>
      </CartProvider>
   
      
    
      
    </Router>
  
  </StrictMode>,
)
