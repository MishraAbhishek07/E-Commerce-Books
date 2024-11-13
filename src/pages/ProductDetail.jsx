import { useEffect, useState } from "react"
import { Rating } from "../components/element/Rating"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { useCart } from "../context/CartContext"
import { useTitle } from "../hooks/useTitle"

import { getProductDetail } from "../services"


export const ProductDetail = () => {
   const{addToCart,removeFromCart,cartList}=useCart()
  
    // const[details,setDetails]=useState({})
    // const{id,name,overview,best_seller,price,poster,rating,in_stock,size,long_description}=details
   
    // useEffect(()=>{
    //     async function fetchApi() {
    //         const response= await fetch("http://localhost:8000/products")
    //         const data=await response.json()
    //         setDetails(data)
            
    //     }
    //     fetchApi()
    // },[])
    // useTitle({name})
    const[products,setProducts]=useState([])
    const find= cartList.find(element=>element.id==products.id)
    const{id}=useParams()
    
    const{name,overview,best_seller,price,poster,rating,in_stock,size,long_description}=products
    useEffect(()=>{
      async function FetchProducts() {
        try{
          const data=await getProductDetail(id)
         setProducts(data)

        }catch(error){
          toast.error(error.message)

        }
        
      }
      FetchProducts()
    },[id])
    useTitle(`${name}`)
 
    return (
      <main className="px-10">
          <section>
            <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{name}</h1>
            <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{overview}</p>
            <div className="flex flex-wrap justify-around">
              <div className="max-w-xl my-3">
                <img className="rounded" src={poster} alt={name} />
              </div>
              <div className="max-w-xl my-3">
                <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                  <span className="mr-1">$</span>
                  <span className="">{price}</span>
                </p>
                <div className="my-3"> <Rating rating={rating} />
                </div>
                <p className="my-4 select-none">
                 {best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span> } 
                  <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">{in_stock?"IN STOCK":"OUT OF STOCK"}</span>
                  {/* <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span> */}
                  <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{size} MB</span>
                </p>
                <p className="my-3">
                 {find? <button onClick={()=>removeFromCart(products)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center bg-red-800 text-white rounded-lg hover:bg-red-500` } >Remove Item <i className="ml-1 bi bi-plus-lg"></i></button>: <button onClick={()=>addToCart(products)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${products.in_stock?"":"cursor-not-allowed"}` } disabled={ products.in_stock ? "" : "disabled" }>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>}
                  {/* <button className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}  disabled={ product.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
                </p>
                <p className="text-lg text-gray-900 dark:text-slate-200">
                    {long_description}

                </p>
              </div>
            </div>
          </section>
        </main> 
    )
  }