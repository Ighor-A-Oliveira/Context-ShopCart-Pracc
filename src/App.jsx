import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import SideMenu from "./Components/SideMenu";

function App() {
  return (
    <div>
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
      </div>
    </div>
  );
}

export default App;
