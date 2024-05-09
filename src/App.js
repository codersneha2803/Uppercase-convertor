import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
    }
  };

  return (
    <>
      <Navbar
        title="ZEVEN"
        value2="AboutUs"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Navbar/> */}
      <div className="container my-3">
        <Textform heading="Enter the text to analyze" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
