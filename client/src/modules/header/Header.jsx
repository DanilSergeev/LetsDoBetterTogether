import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import { observer } from "mobx-react"
import { useContext } from 'react';
import { Context } from '../..';
import logo from "../../style/img/logo_without_wordst.png"


const Header = observer((props) => {
    const { user } = useContext(Context)
    const userObject = Object.assign({}, user.user)

    function exitUser() {
        user.setAuth(!user.isAuth)
        user.setUser({})
        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                {
                    props.isLoaded ?
                        <div className="spinner-border text-light" role="status">
                        </div>
                        :
                        <Container>
                            <Navbar.Brand><Link to="/" className='link_a'><img src={logo} alt="logo" style={{ maxHeight: "5vh" }} />Сделаем лучше вместе</Link></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav style={{ marginLeft: "auto" }}>
                                    {
                                        (userObject.role === "USER" && user.isAuth) ?
                                            <>
                                                <Link to="/user/create" className='link_a linkNav' style={{ marginRight: "1.4rem" }}>Создать заявку</Link>
                                                <Link to="/user/update" className='link_a linkNav' style={{ marginRight: "1.4rem" }}>Посмотер заявки</Link>
                                            </>
                                            :
                                            <></>
                                    }
                                    {
                                        user.isAuth ?
                                            <Nav.Link onClick={() => exitUser()}>Выход</Nav.Link>
                                            :
                                            <>
                                                <Link to="/login" className='link_a linkNav' style={{ marginRight: "1.4rem" }}>Авторизация</Link>
                                                <Link to="/register" className='link_a linkNav'>Регистрация</Link>
                                            </>
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                }
            </Navbar>
        </header>
    )
})
export default Header