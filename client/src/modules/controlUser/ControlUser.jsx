import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { observer } from "mobx-react"
import { Context } from '../..';

const ControlUser = observer(() => {
    const { user } = useContext(Context)
    const userObject = Object.assign({}, user.user)

    return (
        <>
            <section className='wrapper center'>
                <Card style={{ width: '38rem', marginTop: "3rem" }}>
                    <Card.Img variant="top" src="https://storage.myseldon.com/news-pict-10/1063D1433B1DA740947076ABBD62B8EF" />
                    <Card.Body style={{ padding: "3vh" }}>
                        <Card.Title>Добро пожаловать {userObject.email}</Card.Title>
                        <Card.Text>
                            Напишите или проверте свои заявки
                        </Card.Text>
                        <Link to="/login" className='link_a'><Button variant="success" style={{ marginRight: "1rem" }}>Написать</Button></Link>
                        <Link to="/register" className='link_a'><Button variant="success">Проверить</Button></Link>
                    </Card.Body>
                </Card>
            </section>
        </>
    )
})
export default ControlUser