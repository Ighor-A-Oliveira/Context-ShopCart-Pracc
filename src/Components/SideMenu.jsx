import Rating from "./Rating";
import { useState } from "react";


export default function SideMenu() {
    const [rate, setRate] = useState(2);
  return (
    <div className='bg-slate-600 h-full w-full font-sans p-4 text-white '>
        <h1 className="text-3xl mb-[30px]">Filter Products</h1>
        <div className="flex justify-start items-center my-[30px]">
            <input className="mr-[5px]" type="radio" name="" id="" />
            <p>Ascending</p>
        </div>
        <div className="flex items-start my-[30px]">
            <input className="mr-[5px]" type="radio" name="" id="" />
            <p>Descending</p>
        </div>
        <div className="flex items-start my-[30px]">
            <input className="mr-[5px]" type="checkbox" name="" id="" />
            <p>Include Out of Stock</p>
        </div>
        <div className="flex items-start my-[30px]">
            <input className="mr-[5px]" type="checkbox" name="" id="" />
            <p>Fast Delivery Only</p>
        </div>
        <div className="flex items-start my-[30px]">
            <span className="pr-[10px]">Ratings:</span>
            {/*<Rating rating={rate} onClick={ (i) => setRate(i + 1)} />, we only have access to i here because it was passed up by Rating.jsx */}
            <Rating rating={rate} onClick={ (i) => setRate(i + 1)} />
        </div>
        <div className="bg-white hover:bg-gray-300 text-black w-full mx-auto py-3 my-[30px] text-center cursor-pointer rounded-md">
            Clear Filters
        </div>

    </div>
  )
}
