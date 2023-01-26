import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../style/img/logo_without_wordst.png"
import { observer } from "mobx-react"
import { useContext, useState } from 'react';
import { Context } from '..';
import { registration } from '../http/userApi';
import Toast from 'react-bootstrap/Toast';


const Register = observer(() => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [isAgree, isSetAgree] = useState(false);



    //toast
    const [showA, setShowA] = useState(false);
    const [textToast, setTextToast] = useState('')
    const toggleShowA = () => setShowA(!showA);
    const showToast = (text) =>{
        setShowA(!showA)    
        setTextToast(text)
    }
    //

    const navigate = useNavigate()

    const { user } = useContext(Context)

    const signIn = async () => {
        try {
            
            if (!name || !email || !password || !rePassword) {
                return showToast("Не все поля введены")
            }
            if(name.split(" ").length!==3){
                return showToast("Некорректно введено ФИО")
            }
            if(!email.split("").findIndex("@")){
                return showToast("Ощибка ввода email")
            }
            if (password !== rePassword) {
                return showToast("Пароли не совподают")
            }
            if (email.length>=64) {
                return showToast("Недопустимая длина email")
            }
            if (password.length<4||password.length>=64) {
                return showToast("Недопустимая длина пароля")
            }
    
            const response = await registration(name, email, password);
            user.setAuth(true)
            user.setUser(response)
            return navigate("/")
        } catch (error) {
            return showToast("Непредвиденная ошибка")
        }
    }



    return (
        <main className='center'>
            <section className='wrapper center'>
                <Card style={{ padding: "2vh", width: '38rem' }}>
                    <Card.Body>
                        <Card.Img style={{ width: '9rem' }} className="cordLogo" src={logo} />
                        <Card.Title style={{ textAlign: "center", fontSize: "26px" }}>Форма регистрация</Card.Title>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='mt-2'>Введите ФИО (только на русском)</Form.Label>
                                <Form.Control value={name} onChange={(e) => setName(e.target.value.replace(/[^а-яА-Я,' '/]/g, ''))} type="text" placeholder="Введите ФИО" />

                                <Form.Label className='mt-2'>Введите E-mail</Form.Label>
                                <Form.Control value={email} onChange={(e) => setEmail(e.target.value.replace(/[^a-zA-Z,0-9,.,',-,#,@,%,&,/]/g, ''))} type="email" placeholder="name@example.com" />
                                <Form.Label className='mt-3'>Введите пароль</Form.Label>
                                <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Ваш пароль" />
                                <Form.Label className='mt-3'>Повторите пароль</Form.Label>
                                <Form.Control value={rePassword} onChange={(e) => setRePassword(e.target.value)} type="password" placeholder="Повторите пароль" />

                                <Form.Label className='mt-3'>Согласие на обработку персональных данных:</Form.Label>
                                <br /><input onClick={() => isSetAgree(prev => !prev)} checked={isAgree} type="checkbox" /><label onClick={() => isSetAgree(prev => !prev)}> Согласен(а)</label>
                            </Form.Group>
                        </Form>

                        <Button disabled={!isAgree} onClick={() => signIn()} variant="success">Зарегистрироватся</Button>
                        <Card.Body>
                            <Link to="/login">Есть акаунт? Авторизируйтесь</Link>
                        </Card.Body>
                    </Card.Body>
                </Card>


                <Toast bg="danger" className='toast' show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <strong style={{fontSize:"21px"}} className="me-auto">Ошибка</strong>
                    </Toast.Header>
                    <Toast.Body style={{fontSize:"19px"}}>{textToast}</Toast.Body>
                </Toast>
            </section>
        </main>
    )
})
export default Register