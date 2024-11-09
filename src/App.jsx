import { Route, Routes } from "react-router-dom";
import "./App.css";/* 
import Card from "./Components/Card";
import Header from "./Components/Header";
import SideMenu from "./Components/SideMenu"; */
import Layout from "./Pages/Layout";
import Home from "./Components/Home";
import Cart from "./Components/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;

{/* 
      <Header />
      <div className="flex mt-[100px] ml-[15px]">
        <div className="min-w-[380px] h-[800px]">
          <SideMenu/>
        </div>
        <div className="mt-[15px] ml-[20px] content flex justify-around items-center flex-wrap">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div> */}
