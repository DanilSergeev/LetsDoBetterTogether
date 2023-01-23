import "./style/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./modules/footer/Footer";
import Header from "./modules/header/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useContext, useEffect } from "react";
import { Context } from ".";
import { chack } from "./http/userApi";

function App() {
  const {user} = useContext(Context)

  useEffect(()=>{
    chack().then(data => {
      console.log(data)
      user.setAuth(true)
      user.setUser(true)
    })
  },[])


  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
