import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Or individual components
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './MyComponents/About';
import Alert from "./MyComponents/Alert";
import Navbar from "./MyComponents/Navbar";
import Textform from './MyComponents/Textform';

import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alertMsg, setAlertMsg] = useState("");

  const setAlertMessage = (msg) => {
    setAlertMsg(msg);
    setTimeout(() => {
      setAlertMsg("");
    }, 2000);
  }

  const changeMode = () => {
    if (document.getElementById("modeSwitch").checked) {
      setMode("dark");
      document.body.style.backgroundColor = "#34406e";
      document.body.style.color = "#fff";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "black";
    }
  }

  return (
    <>
      <Navbar mode={mode} changeMode={changeMode} />
      <Alert alertMsg={alertMsg} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Textform mode={mode} setAlertMessage={setAlertMessage} />} />
          <Route path="/about" element={<About mode={mode}/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
