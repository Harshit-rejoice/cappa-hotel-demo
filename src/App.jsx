import "./_App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
