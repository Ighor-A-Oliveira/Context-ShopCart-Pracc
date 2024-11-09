import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCart } from "../Contexts/CartContext";
//import Card from "./Card";
import { AiFillDelete } from "react-icons/ai";

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  const {
    state: { cart },
    dispatch,
  } = useCart();

  const isCartEmpty = cart.length === 0;

  return (
    <div className=" fixed w-full top-0">
      <div className="relative grid grid-cols-3 px-[16px] py-[8px] bg-slate-600 items-center">
        <div className="p-4 text-center">
          <Link to="/">
            <h1 className="text-white text-xl font-sans">Shopping Cart</h1>
          </Link>
        </div>
        <div className="p-4 grid place-items-center">
          <input
            className="text-lg w-[90%] rounded-md px-[12px] py-[6px]"
            type="text"
            placeholder="Search a product"
          />
        </div>
        <div className="p-4 flex justify-center">
          <div
            className="px-[10px] bg-green-500 hover:bg-green-800 w-[80px] h-[40px] flex justify-between items-center rounded-md transition-colors duration-300 cursor-pointer"
            onClick={() => {
              setCartOpen(!cartOpen);
            }}
          >
            <FaShoppingCart className="mr-[3px]" color="white" fontSize={25} />
            <p className="text-white text-sm font-bold">{cart.length}</p>
            <MdArrowDropDown color="white" fontSize={25} />
          </div>
        </div>
        {cartOpen && (
          <div className="p-2 absolute top-[66px] right-[277px] w-[470px] bg-white border border-black rounded-sm outline outline-[0.5px] outline-gray-300 max-h-[400px] min-h-[20px] overflow-y-auto">
            {isCartEmpty ? (
              <span className="p-2 py-4 text-gray-500">
                Cart is Empty!
              </span>
            ) : (
              <>
                {cart.map((prod) => (
                  <span
                    className="flex items-center justify-between p-2 border-b w-[95%]"
                    key={prod.id}
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex flex-col ml-3 justify-start items-start w-[250px] overflow-hidden">
                      <span className="text-sm font-semibold">{prod.name}</span>
                      <span className="text-gray-500">
                        R$ {prod.price.split(".")[0]}
                      </span>
                    </div>
                    <AiFillDelete
                      fontSize="20px"
                      className="cursor-pointer ml-2"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })
                      }
                    />
                  </span>
                ))}
                
              </>
            )}
              <Link to="/cart" >
                <button className="w-[95%] mx-[10px] my-2 text-white bg-blue-500 hover:bg-blue-600 rounded py-2" >
                  Go To Cart
                </button>
              </Link>
          </div>
        )}
      </div>
    </div>
  );
}
