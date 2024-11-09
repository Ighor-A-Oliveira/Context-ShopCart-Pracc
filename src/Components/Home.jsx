import { useCart } from "../Contexts/CartContext"
import Card from "./Card"
import SideMenu from "./SideMenu"


export default function Home() {
    const {state: {products}} = useCart()
  return (
    <>
        <div className="min-w-[380px] h-[800px]">
            <SideMenu/>
        </div>
        <div className='flex justify-around items-center flex-wrap'>
        {products.map((prod) => (
            <Card key={prod.id} prod={prod}  />
        ))}
        </div>
    </>
  )
}
