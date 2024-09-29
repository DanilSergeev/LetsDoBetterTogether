import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import HomePageCarusel from '../../components/carusel/HomePageCarusel';


export default function WalcomModule() {
    return (
        <section className='center carusel'>
            <HomePageCarusel></HomePageCarusel>

            <Card className='cardCarusel'>
                <Card.Body style={{ padding: "5vh" }}>
                    <Card.Title style={{ textAlign: "center" }}>Добро пожаловать</Card.Title>
                    <Card.Text >
                        На нашем сайте вы можете оставлять сообщения о проблемах, с которыми столкнулись в нашем городе. Давайте начнём? Пожалуйста, войдите в свою учётную запись!
                    </Card.Text>
                    <Link to="/login" className='link_a'><Button variant="success" style={{ marginRight: "1rem" }}>Авторизация</Button></Link>
                    <Link to="/register" className='link_a'><Button variant="success">Регистрация</Button></Link>
                </Card.Body>
            </Card>

        </section>
    )
}