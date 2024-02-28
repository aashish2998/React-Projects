import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  // function changeColor(color) {
  //   setColor(color);
  // }

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg  bg-white px-3 py-2 rounded-3xl">
            <button
              // onClick={() => changeColor("skyBlue")}
              onClick={() => setColor("Blue")}
              className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              // onClick={() => changeColor("Black")}
              onClick={() => setColor("Orange")}
              className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              // onClick={() => changeColor("Black")}
              onClick={() => setColor("Green")}
              className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
              style={{ backgroundColor: " Green" }}
            >
              Green
            </button>
            <button
              // onClick={() => changeColor("Black")}
              onClick={() => setColor("Pink")}
              className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
              style={{ backgroundColor: "Pink" }}
            >
              Pink
            </button>
            <button
              // onClick={() => changeColor("Black")}
              onClick={() => setColor("Yellow")}
              className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
              style={{ backgroundColor: "Yellow" }}
            >
              Yellow
            </button>
            <button
              // onClick={() => changeColor("Black")}
              onClick={() => setColor("Cyan")}
              className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
              style={{ backgroundColor: "Cyan" }}
            >
              Cyan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
