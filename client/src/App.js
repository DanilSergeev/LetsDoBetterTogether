import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/style.css"
import Footer from "./modules/footer/Footer";
import Header from "./modules/header/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register";
import Login from "./pages/Login";
import {  useContext, useEffect, useState } from "react";
import { Context } from ".";
import { chack } from "./http/userApi";
import UserCreateRequestsPage from "./pages/UserCreateRequestsPage";
import UserUpdataRemoveRequest from "./pages/UserUpdataRemoveRequest";
import AdminChangeRequests from "./pages/AdminChangeRequests";
import AdminControlCategory from "./pages/AdminControlCategory";
import { getAllCategory, getAllRequest, getAllStatus } from "./http/requestAPI";
import AdminUpdata from "./pages/AdminUpdata";

function App() {
  const { user, requests } = useContext(Context)
  const [isLoaded, setIsLoaded] = useState(true)



  useEffect(() => {
    chack().then(data => {
      user.setAuth(true)
      user.setUser(JSON.parse(localStorage.getItem("user")))
    }).finally(() => {
      setIsLoaded(false)
    })
  }, [])

  useEffect(() => {
    getAllCategory().then(data => {
      requests.setCategory(data.category)
    })
  }, [])

  useEffect(() => {
    getAllRequest().then(data => {
      requests.setRequests(data.reque)
    })
  }, [])

  useEffect(() => {
    getAllStatus().then(data => {
      requests.setStatus(data.status)
    })
  }, [])

  

  return (
    <BrowserRouter>
      <Header isLoaded={isLoaded}></Header>
      <Routes>
        <Route path="/" element={<HomePage isLoaded={isLoaded} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/create" element={<UserCreateRequestsPage />} />
        <Route path="/user/update" element={<UserUpdataRemoveRequest />} />
        <Route path="/admin/changeReq" element={<AdminChangeRequests />} />
        <Route path="/admin/category" element={<AdminControlCategory />} />
        <Route path="/admin/request/:id" element={<AdminUpdata />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
