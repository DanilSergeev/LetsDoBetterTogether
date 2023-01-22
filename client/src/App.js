import "./style/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./modules/footer/Footer";
import Header from "./modules/header/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
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
