import { Link } from "react-router-dom"
import { useCart } from "../../../context/CartContext"
export const CartCard = ({product}) => {
  const{removeFromCart}=useCart()
  // {
  //   "id": 10004,
  //   "name": "The Complete Guide to Backend Development",
  //   "overview": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
  //   "long_description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, vel ipsum maxime quam quia, quaerat tempore minus odio exercitationem illum et eos, quas ipsa aperiam magnam officiis libero expedita quo voluptas deleniti sit dolore? Praesentium tempora cumque facere consectetur quia, molestiae quam, accusamus eius corrupti laudantium aliquid! Tempore laudantium unde labore voluptates repellat, dignissimos aperiam ad ipsum laborum recusandae voluptatem non dolore. Reiciendis cum quo illum. Dolorem, molestiae corporis.",
  //   "price": 99,
  //   "poster": "https://images.unsplash.com/photo-1595617795501-9661aafda72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
  //   "image_local": "/assets/images/10004.avif",
  //   "rating": 5,
  //   "in_stock": true,
  //   "size": 7,
  //   "best_seller": true
  // },
  const{poster,id,name,rating,in_stock,price}=product
    return (
      <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
        <div className="flex">
            <Link href="">
              <img className="w-32 rounded" src={poster} alt="" />
            </Link>
            <div className="">
              <Link href="">
                <p className="text-lg ml-2 dark:text-slate-200">{name}</p>
              </Link>            
              <button onClick={()=>removeFromCart(product)} className="text-base ml-2 text-red-400">Remove</button>
            </div>
        </div>
        <div className="text-lg m-2 dark:text-slate-200">
          <span>{`$${price}`}</span>
        </div>
      </div>
    )
  }