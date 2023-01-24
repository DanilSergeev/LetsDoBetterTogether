import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function WalcomModule() {
    return (
        <section className='wrapper center'>
            <Card style={{ width: '38rem', marginTop: "3rem" }}>
                <Card.Img variant="top" src=" https://tsar-events.com/1574107940_rica-ozero-abhazija-12.jpg" />
                <Card.Body style={{ padding: "3vh" }}>
                    <Card.Title>Добро пожаловать</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam beatae eligendi dolorem. Amet ut ipsum aliquam nulla.
                    </Card.Text>
                    <Link to="/login" className='link_a'><Button variant="success" style={{ marginRight: "1rem" }}>Авторизация</Button></Link>
                    <Link to="/register" className='link_a'><Button variant="success">Регистрация</Button></Link>
                </Card.Body>
            </Card>
        </section>
    )
}