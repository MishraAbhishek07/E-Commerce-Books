import React, { useState } from 'react'
import { CartCard } from './components/CartCard'
import { CartEmpty } from './components/CartEmpty'
import { CartList } from './components/CartList'
import { useCart } from '../../context/CartContext'
import { useTitle } from '../../hooks/useTitle'

export const Cart = () => {
  const{cartList}=useCart()
  
 useTitle(`Cart(${cartList.length})`)
  
  return (
    <div>
     {  cartList.length?<CartList/>:<CartEmpty/>}
    
    </div>
  )
}
