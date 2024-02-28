import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with tailwind
      </h1>
      <Card
        username="BMW"
        url="https://images.unsplash.com/photo-1635073908681-b4dfbd6015e8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym13JTIwczEwMDBycnxlbnwwfHwwfHx8MA%3D%3D"
      />
      <Card username="Aprilia" post="Sport's Bike" />
    </>
  );
}

export default App;
