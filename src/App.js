import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [mode1, setMode1] = useState("yellow"); // Whether dark mode is enabled or not

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      //for ur understanding
      //     document.title = "TextUtils - Dark Mode";

      //     //this not good experince of user: just knoledge
      // setInterval(() => {
      //   document.title = "Install textUtils now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  const paletteMode = () => {
    if (mode1 === "light") {
      setMode1("yellow");
      document.body.style.backgroundColor = "#87832b";
    } else {
      setMode1("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="YourART"
          mode={mode}
          mode1={mode1}
          toggleMode={toggleMode}
          paletteMode={paletteMode}
          key={new Date()}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/">
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtils - word counter, character counter, remove extra spaces"
                mode={mode}
              />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
