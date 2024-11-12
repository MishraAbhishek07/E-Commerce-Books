import { createContext, useContext, useEffect, useReducer } from "react"
import { FilterReducer } from "../reducers/Filterreducer"
const filterIntialState={
    productList:[],
    bestSellerOnly:false,
    inStockOnly:false,
    sortBy:null,
    rating:null


}
const FilterContext=createContext(filterIntialState)
export const FilterProvider=({children})=>{
    const[state,dispatch]=useReducer(FilterReducer,filterIntialState)
    function IntialProductList(products){
        dispatch({
            type:"PRODUCT_LIST",
            payload:{
                products:products
            }
        })
    }
   
    
    function bestseller(products){
        return state.bestSellerOnly?products.filter(product=>product.best_seller==true):products
    }
    function instock(products){
        return state.inStockOnly?products.filter(product=>product.in_stock==true):products
    }
    function sort(products){
        if(state.sortBy==="lowtohigh"){ 
             return products.sort((a,b)=>Number(a.price)-Number(b.price)) }
        if(state.sortBy==="hightolow"){
            return products.sort((a,b)=>Number(b.price)-Number(a.price)) }
        else {
            return products
        }    
    }
    function rating(products){
        if(state.rating==="4STARABOVE"){
        return products.filter(product=>product.rating>=4)}
        if(state.rating==="3STARABOVE"){
        return products.filter(product=>product.rating>=3)}
        if(state.rating==="2STARABOVE"){
        return products.filter(product=>product.rating>=2)}
        if(state.rating==="1STARABOVE")
        {return products.filter(product=>product.rating>=1)}
        return products
        
        
    }
    const filterdProductList=rating(sort(instock(bestseller(state.productList))))
    // console.log(filterdProductList)

    const value={
        state,
        dispatch,
        products:filterdProductList,
        IntialProductList,

    }
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}
export const useFilter=()=>{
   const context=useContext(FilterContext)
   return context
}
