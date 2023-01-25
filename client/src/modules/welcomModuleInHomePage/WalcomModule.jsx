import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import HomePageCarusel from '../../components/carusel/HomePageCarusel';


export default function WalcomModule() {
    return (
        <section className='center carusel'>
            <HomePageCarusel></HomePageCarusel>

            <Card  style={{ position:"absolute", width: '38rem'}}>
                <Card.Body style={{ padding: "5vh" }}>
                    <Card.Title className='cardCarusel'>Добро пожаловать</Card.Title>
                    <Card.Text >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam beatae eligendi dolorem. Amet ut ipsum aliquam nulla.
                    </Card.Text>
                    <Link to="/login" className='link_a'><Button variant="success" style={{ marginRight: "1rem" }}>Авторизация</Button></Link>
                    <Link to="/register" className='link_a'><Button variant="success">Регистрация</Button></Link>
                </Card.Body>
            </Card>

        </section>
    )
}