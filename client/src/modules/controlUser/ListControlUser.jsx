import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { useContext, useState } from 'react';
import { Context } from '../..';
import { observer } from "mobx-react"




const ListControlUser = observer(() => {
    const { requests } = useContext(Context)

    const [show, setShow] = useState(false);



    const handleClose = () => setShow(false);
    const delitPost = (index) => {
        setShow(true);
    }

    return (
        <section className='wrapper mt-5'>
            <ul>
                {
                    requests.requestss.map((item, index) =>
                        <li key={item.id} className='selfCardRequests'>
                            <Card >
                                <Card.Body style={{ width: "100%" }}>
                                    <Card.Header>Заявка: №{item.id}</Card.Header>
                                    <Card.Title>Название: {item.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Категория: котики</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Статус: Новая</Card.Subtitle>
                                    <Card.Text style={{ maxWidth: "90%" }}>
                                        Описание: {item.description}
                                    </Card.Text>
                                    <Card.Text style={{ marginTop: "auto", fontWeight: "bold" }}>Создано: {item.createdAt}</Card.Text>
                                    <Button onClick={() => delitPost(index)} variant="success" style={{ width: "200px" }}>Удалить заявку</Button>
                                </Card.Body>
                            </Card>

                            <div className="lastRequestImg">
                                <img src={process.env.REACT_APP_BASE_URL + item.file} alt={item.title} />
                            </div>
                        </li>
                    )
                }

            </ul>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Удаление</Modal.Title>
                </Modal.Header>
                <Modal.Body>Вы точно хотите удалить пост?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Подтверждаю
                    </Button>
                </Modal.Footer>
            </Modal>

        </section>
    )
})
export default ListControlUser