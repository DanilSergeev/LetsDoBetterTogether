import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../http/userApi';
import logo from "../style/img/logo_without_wordst.png"
import { observer } from "mobx-react"
import { useContext } from 'react';
import { Context } from '..';

const Login = observer(() => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const {user} = useContext(Context)

    const navigate = useNavigate()

    const signUp = async () => {
        const response = await login(email,password);
        user.setAuth(true)
        user.setUser(response)
        return navigate("/")
    }

    return (
        <main className='center'>
            <section className='wrapper center'>
                <Card style={{ padding: "2vh", width: '38rem'}}>
                    <Card.Body>
                    <Card.Img style={{ width: '9rem' }} className="cordLogo" src={logo}/>
                        <Card.Title style={{textAlign: "center",fontSize: "26px"}}>Форма авторизации</Card.Title>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='mt-2'>Введите E-mail</Form.Label>
                                <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="name@example.com" />
                                <Form.Label className='mt-3'>Введите пароль</Form.Label>
                                <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Ваш пароль" />
                            </Form.Group>
                        </Form>
                        <Button onClick={()=>signUp()} variant="success">Войти</Button>

                        <Card.Body>
                            <Link to="/register">Нет акаунта? Авторизируйтесь</Link>
                        </Card.Body>
                    </Card.Body>
                </Card>
            </section>
        </main>
    )
})
export default Login