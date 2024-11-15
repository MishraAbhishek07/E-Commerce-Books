import React, { useState, useEffect } from 'react';
import { FilterBar } from './components/Filter';
import { ProductCard } from '../../components/element/ProductCard';
import { useLocation } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import { useFilter } from '../../context/FilterContext';
import { useCart } from '../../context/CartContext';
import { getProductList } from '../../services/productService';
import { toast } from 'react-toastify';
export const ProductsList = () => {
  // const{cartList,addToCart,removeFr}=useCart()
  const{products, IntialProductList}=useFilter()
  const [show, setShow] = useState(false);
  // const[errMessage,seterrMessage]=useState()
  // const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  useTitle("Explore eBooks Collection")

  const search = useLocation().search;
  // console.log(search)
  const searchTerm = new URLSearchParams(search).get("search") || '';
  // console.log(searchTerm)
  

  useEffect(() => {
    async function fetchProducts() {
      try{
        const data=await getProductList(searchTerm)
        IntialProductList(data)
       
      }
      catch(error){
      toast.error(error.message)

      }
           

    }
    fetchProducts();
  }, [searchTerm]);

  // useEffect(() => {
  //   if (searchTerm) {
  //     const filtered = products.filter(product =>
  //       product.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  //       // product.overview.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       // product.long_description.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setFilteredProducts(filtered);
  //   } else {
  //     setFilteredProducts(products);
  //   }
  // }, [products, searchTerm]);

  return (
    <main className='px-5'>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All eBooks ({products.length})
          </span>
          <span>
            <button
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                onClick={() => setShow(!show)}
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                ></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
        
          {products.map((product) => (
            
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {show && <FilterBar setShow={setShow} />}
      </section>
    </main>
  );
};
// import React, { useState, useEffect } from 'react';
// import { FilterBar } from './components/Filter';
// import { ProductCard } from '../../components/element/ProductCard';
// import { useLocation } from 'react-router-dom';
// import { useTitle } from '../../hooks/useTitle';
// import { useFilter } from '../../context/FilterContext';
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useTitle } from "../../hooks/useTitle";
// import { useFilter } from "../../context";
// import { ProductCard } from "../../components";
// import { FilterBar } from "./components/FilterBar";

// export const ProductsList = () => {
//   const { products, initialProductList } = useFilter();
//   const [show, setShow] = useState(false);
//   const search = useLocation().search;
//   const searchTerm = new URLSearchParams(search).get("q");
//   useTitle("Explore eBooks Collection");
 

//   useEffect(() => {
//     async function fetchProducts(){
//       const response = await fetch(`http://localhost:8000/products?name_like=${searchTerm ? searchTerm : ""}`);
//       const data = await response.json()
      
//       initialProductList(data);
//     }
//     fetchProducts();
//   }, [searchTerm]);

//   return (
//     <main>
//         <section className="my-5">
//           <div className="my-5 flex justify-between">
//             <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks ({products.length})</span>
//             <span>
//               <button onClick={() => setShow(!show)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button"> 
//                 <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
//               </button>
//             </span>            
//           </div>    

//           <div className="flex flex-wrap justify-center lg:flex-row">
//             { products.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             )) }            
//           </div>  
//         </section>

//         { show && <FilterBar setShow={setShow} /> }

//     </main> 
//   )
// }