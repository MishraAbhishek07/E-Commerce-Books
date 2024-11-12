import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo192.png";
import { Search } from '../section/Search';
import { DropdownLoggedIn } from '../element/DropdownLoggedIn';
import {DropdownLoggedOut} from "../element/DropdownLoggedOut"
import { useCart } from '../../context/CartContext';
export const Header = () => {
  const{cartList}=useCart()
  const[show,setShow]=useState(false)
  const[drop,setDrop]=useState(false)
  const token=JSON.parse(sessionStorage.getItem("token"))
  const [dark, setDark] = useState(() => {
    try {
      const storedDark = localStorage.getItem("dark");
      return storedDark !== null ? JSON.parse(storedDark) : false;
    } catch (error) {
      console.error("Error parsing localStorage item 'dark':", error);
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
          </Link>
          <div className="flex items-center relative">
            <span onClick={() => setDark(!dark)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
            <span onClick={()=>setShow(!show)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <div className="relative">
                <span className="text-2xl bi bi-cart-fill">
                  <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">{cartList.length}</span>
                </span>
              </div>
            </Link>
            <span onClick={()=>setDrop(!drop)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
              {drop && (token?<DropdownLoggedIn setdrop={setDrop}/>:<DropdownLoggedOut setdrop={setDrop}/>) } 
          </div>
        </div>
      </nav>
     {show&&  <Search setShow={setShow}/>}
    </header>
  );
};
