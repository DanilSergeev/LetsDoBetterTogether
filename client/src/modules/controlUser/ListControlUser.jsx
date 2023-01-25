import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';




export default function ListControlUser() {
    const [show, setShow] = useState(false);



    const handleClose = () => setShow(false);
    const delitPost = (index) => {
        setShow(true);

    }

    return (
        <section className='wrapper mt-5'>
            <ul>
                {[...Array(4)].map((_, index) =>
                    <li className='selfCardRequests'>
                        <Card >
                            <Card.Body style={{ width: "100%" }}>
                                <Card.Header>Заявка: №{index}</Card.Header>
                                <Card.Title>Это название</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Категория: котики</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Статус: Новая</Card.Subtitle>
                                <Card.Text style={{ maxWidth: "90%" }}>
                                    Описание: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, commodi neque porro sequi ab molestiae voluptas dolorem officiis! Officia quia dicta ex.
                                </Card.Text>
                                <Card.Text style={{ marginTop: "auto", fontWeight: "bold" }}>Создано: {Date(Date.now())}</Card.Text>
                                <Button onClick={() => delitPost(index)} variant="success" style={{ width: "200px" }}>Удалить заявку</Button>
                            </Card.Body>
                        </Card>

                        <div className="lastRequestImg">
                            <img src="https://mirpozitiva.ru/wp-content/uploads/2019/11/1480494344_kot_sneg.jpg" alt="" />
                        </div>
                    </li>
                )}

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
}