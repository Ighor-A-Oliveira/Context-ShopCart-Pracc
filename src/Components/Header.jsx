import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";


export default function Header() {
  const [cartOpen, setCartOpen] = useState(false)
  return (
    <div className=" fixed w-full top-0">
        <div className="relative grid grid-cols-3 px-[16px] py-[8px] bg-slate-600 items-center">
          <div className="p-4 text-center">
            <h1 className="text-white text-xl font-sans">Shopping Cart</h1>
          </div>
          <div className="p-4 grid place-items-center">
            <input className="text-lg w-[90%] rounded-md px-[12px] py-[6px]" type="text" placeholder="Search a product" />
          </div>
          <div className="p-4 flex justify-center">
            <div className="px-[10px] bg-green-500 hover:bg-green-800 w-[80px] h-[40px] flex justify-between items-center rounded-md transition-colors duration-300 cursor-pointer"
              onClick={() => {setCartOpen(!cartOpen)}}>
              <FaShoppingCart className="mr-[3px]" color="white" fontSize={25} />
              <p className="text-white text-sm font-bold">0</p>
              <MdArrowDropDown color="white" fontSize={25}/>
            </div>
          </div>
          {cartOpen 
          && 
          (
            <div className="absolute top-[66px] right-[277px] w-[370px] bg-white border border-black rounded-sm  outline outline-[0.5px] outline-gray-300">
              <p className="p-2">Cart is Empty</p>
            </div>
          )}
        </div>
    </div>
  )
}
