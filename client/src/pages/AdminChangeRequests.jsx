import {  useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { observer } from "mobx-react"
import { useContext } from 'react';
import { Context } from '..';

const AdminChangeRequests = observer(() => {
    const { requests } = useContext(Context)

    const [openEditor, setOpenEditor] = useState(false)

    const funOpenEditor = (index) => {
        setOpenEditor(prev => !prev)
    }





    return (
        <main>
            {
                !openEditor ?
                    <section className='wrapper changeRequests'>
                        <h2>Админка </h2>
                        <ul>
                            {
                                requests.requestss.map((item, index)=>
                                <li key={item.id} className='selfCardRequests'>
                                    <Card >
                                        <Card.Body style={{ width: "100%" }}>
                                            <Card.Header style={{backgroundColor:"unset"}}>Заявка: №{item.id}</Card.Header>
                                            <Card.Title>Название: {item.title}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Категория: котики</Card.Subtitle>
                                            <Card.Subtitle className="mb-2 text-muted">Статус: Новая</Card.Subtitle>
                                            <Card.Text style={{ maxWidth: "90%" }}>
                                                Описание: {item.description}
                                            </Card.Text>
                                            <Card.Text style={{ marginTop: "auto", fontWeight: "bold" }}>Создано: {item.createdAt}</Card.Text>
                                            <Button onClick={() => funOpenEditor(index)} variant="success">Редактировать</Button>
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
                    :
                    <section className='wrapper marginBread'>
                        <Breadcrumb>
                            <Breadcrumb.Item onClick={() => setOpenEditor(false)}>Список заявак</Breadcrumb.Item>
                            <Breadcrumb.Item active>now</Breadcrumb.Item>
                        </Breadcrumb>


                    </section>
            }
        </main>
    )
})
export default AdminChangeRequests