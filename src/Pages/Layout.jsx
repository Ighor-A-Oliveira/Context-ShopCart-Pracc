import { Outlet } from "react-router-dom";
import Header from "../Components/Header";


export default function Layout() {
  return (
    <div>
      <Header />
      <div className="mt-[100px] ml-[15px]">
        <div className="mt-[15px] ml-[20px] flex justify-between">
            <Outlet/>
        </div>
      </div>
    </div>
  )
}
