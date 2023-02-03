import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { observer } from "mobx-react"
import { Context } from '../..';
import HomePageCarusel from '../../components/carusel/HomePageCarusel';

const ControlUser = observer(() => {
    const { user } = useContext(Context)
    const userObject = Object.assign({}, user.user)

    return (
        <section className='center carusel'>
            <HomePageCarusel></HomePageCarusel>

            <Card className='cardCarusel'>
                <Card.Body style={{ padding: "6vh" }}>
                    <Card.Title>Добро пожаловать {userObject.name}</Card.Title>
                    <Card.Text >Напишите или проверте свои заявки</Card.Text>
                    <Link to="/user/create" className='link_a'><Button variant="success" style={{ marginRight: "1rem" }}>Написать</Button></Link>
                    <Link to="/user/update" className='link_a'><Button variant="success">Проверить</Button></Link>
                </Card.Body>
            </Card>
        </section>
    )
})
export default ControlUser