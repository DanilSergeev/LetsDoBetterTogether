import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { observer } from "mobx-react"
import { useContext } from 'react';
import { Context } from '..';


const AdminControlCategory = observer(() => {
    const { requests } = useContext(Context)
    let selectIdForDelit = 0;

    const [show, setShow] = useState(false);
    const [textModal, setTextModal] = useState("")


    const handleClose = () => setShow(false);
    const delitPost = (id, text) => {
        setTextModal(text)
        setShow(true);
        selectIdForDelit = id
    }
    const delFun =()=>{
        handleClose()
    }


    return (
        <main >
            <section className='wrapper center' style={{ marginTop: "18vh" }}>
                <Card style={{ padding: "2vh", width: '38rem' }}>
                    <Card.Body>
                        <Card.Img style={{ width: '9rem' }} />
                        <Card.Title style={{ textAlign: "center", fontSize: "26px" }}>Форма создания категории</Card.Title>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='mt-2'>Введите название категории</Form.Label>
                                <Form.Control type="email" placeholder="Введите название категории" />
                            </Form.Group>
                        </Form>
                        <Button variant="success">Создать</Button>
                    </Card.Body>
                </Card>
            </section>
            <section className='wrapper center catygoryTable'>
                <h2>Список категорий</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Название категории</th>
                            <th>Удаление категории</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        requests.categoryss.map((item)=>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>Название: {item.title}</td>
                                <td onClick={()=>delitPost(item.id,item.title)} style={{ textDecoration: "underline", cursor: "pointer", color: "#0000FF" }}>Удалить</td>
                            </tr>
                        )
                    }
                    </tbody>


                </Table>
            </section>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Удаление</Modal.Title>
                </Modal.Header>
                <Modal.Body>Вы точно хотите удалить категорию: "{textModal}"?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=>delFun()}>
                        Подтверждаю
                    </Button>
                </Modal.Footer>
            </Modal>
        </main>
    )
})
export default AdminControlCategory