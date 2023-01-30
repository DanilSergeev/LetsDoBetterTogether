import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { observer } from "mobx-react"
import { useContext } from 'react';
import { Context } from '..';
import { useNavigate } from 'react-router-dom';

const AdminChangeRequests = observer(() => {
    const { requests } = useContext(Context)
    const navigate = useNavigate()

    const funOpenEditor = (id) => {

        return navigate("/admin/request/" + id)
    }





    return (
        <main>
            <section className='wrapper changeRequests'>
                <h2>Админка </h2>
                <ul>
                    {
                        requests.requestss.map((item) =>
                            <li key={item.id} className='selfCardRequests'>
                                <Card >
                                    <Card.Body style={{ width: "100%" }}>
                                        <Card.Header style={{ backgroundColor: "unset" }}>Заявка: №{item.id}</Card.Header>
                                        <Card.Title>Название: {item.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Категория: котики</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Статус: Новая</Card.Subtitle>
                                        <Card.Text style={{ maxWidth: "90%" }}>
                                            Описание: {item.description}
                                        </Card.Text>
                                        <Card.Text style={{ marginTop: "auto", fontWeight: "bold" }}>Создано: {item.createdAt.substr(0, 10)}</Card.Text>
                                        <Button onClick={() => funOpenEditor(item.id)} variant="success">Редактировать</Button>
                                    </Card.Body>
                                </Card>

                                <div className="lastRequestImg">
                                    <img src={process.env.REACT_APP_BASE_URL + item.file} alt="" />
                                </div>
                            </li>
                        )
                    }
                </ul>
            </section>
        </main>
    )
})
export default AdminChangeRequests