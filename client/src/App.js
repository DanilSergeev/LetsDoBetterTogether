import "./style/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./modules/footer/Footer";
import Header from "./modules/header/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import { chack } from "./http/userApi";

function App() {
  const {user} = useContext(Context)
  const [isLoaded, setIsLoaded] = useState(true)


  useEffect(()=>{
    chack().then(data => {
      user.setAuth(true)
      user.setUser(JSON.parse(localStorage.getItem("user")))
    }).finally(()=>{
      setIsLoaded(false)
    })
  },[])


  return (
    <BrowserRouter>
      <Header isLoaded={isLoaded}></Header>
      <Routes>
        <Route path="/" element={<HomePage isLoaded={isLoaded}/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
