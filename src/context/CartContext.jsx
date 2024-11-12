import {CartReducer} from "../reducers/CartReducer"
import { Children, createContext, useContext, useReducer } from "react";
 const IntialCartList={
    cartList:[],
    total:0
 }

 const CartContext=createContext(IntialCartList)

 export const CartProvider=({children})=>{
    const[state,dispatch]=useReducer(CartReducer,IntialCartList)

    function addToCart(product){
        const updatedCartList=state.cartList.concat(product)
        const updatedTotal=state.total+product.price
        dispatch({
            type:"ADD",
            payload:{
                product:updatedCartList,
                total:updatedTotal

            }

        })


    }
    function removeFromCart(product){
        const updatedCartList=state.cartList.filter(item => item.id !== product.id);
        // totalAmount(updatedCartList)
        const updatedTotal=state.total-product.price
        dispatch({
            type:"REMOVE",
            payload:{
                product:updatedCartList,
                total:updatedTotal
            }

        })

    }
    // function totalAmount(products){
    //      total=products.map((product)=>(product.price+state.total))
    //     dispatch({
    //         type:"TOTAL_Amount",
    //         payload:{
    //             total:total
    //         }})
    // }
    function clearCart(){
        dispatch({
            type:"CLEAR",
            payload:{
                products:[],
                total:0
            }
        })

    }

    const value={
        cartList:state.cartList,
        total:state.total,
        addToCart,
        removeFromCart,
        clearCart
    }
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
 }
 export const useCart=()=>{
    const context=useContext(CartContext)
    return context
 }