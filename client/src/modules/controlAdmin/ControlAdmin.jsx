import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { observer } from "mobx-react"
import { Context } from '../..';
import HomePageCarusel from "../../components/carusel/HomePageCarusel";

const ControlAdmin = observer(()=> {
    
    const { user } = useContext(Context)
    const userObject = Object.assign({}, user.user)
    return (
        <section className='center carusel'>
            <HomePageCarusel></HomePageCarusel>

            <Card className='cardCarusel' style={{ position: "absolute", maxWidth: '44vh' }}>
                <Card.Body style={{ padding: "6vh" }}>
                    <Card.Title>Добро пожаловать {userObject.name}</Card.Title>
                    <Card.Text>Вы можите управлять заявками или категориями</Card.Text>
                    <Link to="/admin/changeReq" className='link_a'><Button variant="success" style={{ marginRight: "1rem" }}>К заявкам</Button></Link>
                    <Link to="/admin/category" className='link_a'><Button variant="success">К категориями</Button></Link>
                </Card.Body>
            </Card>
        </section>
    )
})
export default ControlAdmin