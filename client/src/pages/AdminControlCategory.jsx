import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { observer } from "mobx-react"
import { useContext } from 'react';
import { Context } from '..';
import { createCategory, delitCategory } from '../http/requestAPI';
import MyToasts from '../components/toasts/MyToasts';



const AdminControlCategory = observer(() => {
    let { requests } = useContext(Context)


    const [show, setShow] = useState(false);
    const [textModal, setTextModal] = useState("")
    const [textCatygory, setTextCatygory] = useState("")
    const [textForToasts, setTextForToasts] = useState("Сообщение")
    const [idTargetForDelit, setIdTargetForDelit] = useState(0);

    const [showToats, setShowToats] = useState(false);
    const toggleShow = () =>{
        setShowToats(prev=>!prev)
    }

    const handleClose = () => setShow(false);
    const delitPost = (id, text) => {
        setIdTargetForDelit(id);
        setTextModal(text)
        setShow(true);
    }
    
    const delFun = async () => {
        const response = await delitCategory(idTargetForDelit)
        setShowToats(prev=>!prev)
        setTextForToasts(response.message)
        requests.setCategory([...requests.categoryss.filter((item)=> item.id!==idTargetForDelit?item:null)])
        handleClose()
    }


    const funCreateCatygory = async () => {
        const response = await createCategory(textCatygory)
        requests.setCategory([
            ...requests.categoryss,
            {
                id: response.category.id,
                title: response.category.title,
                createdAt: response.category.createdAt,
                updatedAt: response.category.updatedAt
            }
        ])
        setShowToats(prev=>!prev)
        setTextForToasts("Категория создана")
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
                                <Form.Control value={textCatygory} onChange={e => setTextCatygory(e.target.value)} type="email" placeholder="Введите название категории" />
                            </Form.Group>
                        </Form>
                        <Button onClick={() => funCreateCatygory()} variant="success">Создать</Button>
                    </Card.Body>
                </Card>
            </section>
            <section className='wrapper center catygoryTable'>
                <h2>Список категорий</h2>
                {
                    requests.categoryss.length ?

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
                                    requests.categoryss.map((item,index) =>
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>Название: {item.title}</td>
                                            <td onClick={() => delitPost(item.id, item.title)} style={{ textDecoration: "underline", cursor: "pointer", color: "#0000FF" }}>Удалить</td>
                                        </tr>
                                    )
                                }
                            </tbody>

                        </Table>
                        :
                        <h2>Нет категорий</h2>
                }
            </section>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Удаление</Modal.Title>
                </Modal.Header>
                <Modal.Body>Вы точно хотите удалить категорию: "{textModal}"?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => delFun()}>
                        Подтверждаю
                    </Button>
                </Modal.Footer>
            </Modal>

            <MyToasts showToats={showToats} toggleShow={toggleShow} text={textForToasts} bg="warning"></MyToasts>
        </main>
    )
})
export default AdminControlCategory