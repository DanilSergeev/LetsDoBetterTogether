import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import logo from "../style/img/logo_without_wordst.png"

export default function Login() {
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
                                <Form.Control type="email" placeholder="name@example.com" />
                                <Form.Label className='mt-4'>Введите пароль</Form.Label>
                                <Form.Control type="password" placeholder="Ваш пароль" />
                            </Form.Group>
                        </Form>

                        <Button variant="success"><Link to="/login" className='link_a'>Войти</Link></Button>
                        <Card.Body>
                            <Link to="/register">Нет акаунта? Авторизируйтесь</Link>
                        </Card.Body>
                    </Card.Body>
                </Card>
            </section>
        </main>
    )
}