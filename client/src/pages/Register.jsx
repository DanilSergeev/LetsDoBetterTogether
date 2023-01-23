import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../style/img/logo_without_wordst.png"
import { observer } from "mobx-react"
import { useContext, useState } from 'react';
import { Context } from '..';
import { registration } from '../http/userApi';


const Register= observer(() => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [rePassword, setRePassword] = useState(""); 
    const navigate = useNavigate()

    const {user} = useContext(Context)

    const signIn = async () =>{
        if(password!==rePassword){
            return alert("Пароль не совподают")
        }
        const response = await registration(email, password);
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
                        <Card.Title style={{textAlign: "center",fontSize: "26px"}}>Форма регистрация</Card.Title>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='mt-2'>Введите E-mail</Form.Label>
                                <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="name@example.com" />
                                <Form.Label className='mt-4'>Введите пароль</Form.Label>
                                <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Ваш пароль" />
                                <Form.Label className='mt-4'>Повторите пароль</Form.Label>
                                <Form.Control value={rePassword} onChange={(e)=>setRePassword(e.target.value)} type="password" placeholder="Повторите пароль" />
                            </Form.Group>
                        </Form>

                        <Button onClick={()=>signIn()} variant="success"><Link to="/login" className='link_a'>Зарегистрироватся</Link></Button>
                        <Card.Body>
                            <Link to="/login">Есть акаунт? Авторизируйтесь</Link>
                        </Card.Body>
                    </Card.Body>
                </Card>
            </section>
        </main>
    )
})
export default Register