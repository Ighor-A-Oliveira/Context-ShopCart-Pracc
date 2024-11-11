import { AiFillDelete } from "react-icons/ai";
import { useCart } from "../Contexts/CartContext";
import { useEffect, useState } from "react";

export default function Cart() {
  const {state: {cart}, dispatch} = useCart()
  console.log(cart)

  const [total, setTotal] = useState(0)
  useEffect( () => {
    /* acc = variable that holds the total value while the loop is still on */
    /* curr hold the current array */
    /* so each iteration is => acc = total + Number(price) * quantity */
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty,0))
  }, 
  /* it updates if there a change to the state */
  [cart])

  return (
    <div className="flex w-full">
      <div className="flex flex-col justify-start items-center w-full mt-[15px] ">
        {cart.map((prod) => (
          /* Item flex */
          <span
          className="flex items-center justify-between p-4 w-[760px] outline outline-gray-400 outline-[0.5px] "
          key={prod.id}>

            {/* item image */}
          <img
            src={prod.image}
            alt={prod.name}
            className="w-16 h-16 object-cover rounded-md"
          />

          {/* Name and price */}
          <div className="flex flex-col ml-3 justify-start items-start w-[250px] overflow-hidden">
            <span className="text-sm font-semibold">{prod.name}</span>
            <span className="text-gray-500">
              R$ {prod.price}
            </span>
          </div>

          <div>
          <select
            id="combo-box"
            className="min-w-[80px] block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => {
              const selectedValue = e.target.value;
              dispatch({ type: 'CHANGE_QTY_FROM_CART', payload: {...prod, qty: selectedValue } })
            }}
            value={prod.qty}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          </div>

          {/* Delete button */}
          <AiFillDelete
            fontSize="20px"
            className="cursor-pointer ml-2"
            onClick={() =>{
              dispatch({ type: "REMOVE_FROM_CART", payload: prod})
            }
              
            }
          />
        </span>
        ))}
      </div>

      {/* Side menu */}
      <div className="min-w-[530px] min-h-[800px] bg mr-[15px]">
        <div className="bg-slate-600 h-full w-full font-sans p-4 text-white flex flex-col">
          <span className="text-3xl mb-[35px]">Subtotal ({cart.length}) items</span>
          <span style={{ fontWeight: 700, fontSize: 20 }}>Total: R$ 
            {
              total.toFixed(2)
            }
            </span>
          <button className="w-[95%] p-3 bg-blue-500 hover:bg-blue-700 mt-[25px] rounded-md" type="button" disabled={cart.length === 0}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
