import { useEffect, useState } from "react"
import {ProductCard} from "../../../components/element/ProductCard"
import { getFeaturedProduct } from "../../../services/productService"
import { toast } from "react-toastify"
export const FeaturedProducts = () => {
  const[products,setProducts]=useState([])
  
  useEffect(()=>{
    async function FetchProducts() {
      try{
        const data=await getFeaturedProduct()
        setProducts(data)
      }
      catch(error){
        toast.error(error.message)
      }
    
    }
    FetchProducts()
  },[])
    return (
      <section className="my-20">
          <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
          {/* <div className="flex flex-wrap justify-center lg:flex-row"> */}
          <div  className="flex flex-wrap justify-center lg:flex-row">
          {products.map((product)=>(
    
              <ProductCard key={product.id} product={product} />
               
          ))} 
          
          </div>
      </section>
    )
  }