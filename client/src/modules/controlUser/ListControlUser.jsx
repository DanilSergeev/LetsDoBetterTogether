import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { useContext, useState } from 'react';
import { Context } from '../..';
import { observer } from "mobx-react"
import { delitRequest } from '../../http/requestAPI';
import MyToasts from '../../components/toasts/MyToasts';




const ListControlUser = observer(() => {
    const { requests } = useContext(Context)

    const [show, setShow] = useState(false);
    const [targetId, setTargetId] = useState(0)
    const handleClose = () => setShow(false);
    const [textForToasts, setTextForToasts] = useState("Сообщение")

    const [showToats, setShowToats] = useState(false);
    const toggleShow = () =>{
        setShowToats(prev=>!prev)
    }

    const category = [...requests.categoryss]


    const delitPost = (id) => {
        setTargetId(() => id)
        setShow(true);
    }
    const delitFun = async () => {
        const response = await delitRequest(targetId)
        toggleShow()
        setTextForToasts(response.message)
        requests.setRequests([...requests.requestss.filter((item)=> item.id!==targetId?item:null)])
        handleClose()
    }
    
    
    return (
        <section className='wrapper mt-5'>
            <ul>
                {
                    requests.requestss.map((item) =>
                        <li key={item.id} className='selfCardRequests'>
                            <Card >
                                <Card.Body style={{ width: "100%" }}>
                                    <Card.Header style={{ backgroundColor: "unset" }}>Заявка: №{item.id}</Card.Header>
                                    <Card.Title>Название: {item.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Категория: { item.CategorysId }</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Статус: {item.StatusId}</Card.Subtitle>
                                    <Card.Text style={{ maxWidth: "90%" }}>
                                        Описание: {item.description}
                                    </Card.Text>
                                    <Card.Text style={{ marginTop: "auto", fontWeight: "bold" }}>Создано: {item.createdAt}</Card.Text>
                                    <Button onClick={() => delitPost(item.id)} variant="success" style={{ width: "200px" }}>Удалить заявку</Button>
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
                    <Button variant="success" onClick={() => delitFun()}>
                        Подтверждаю
                    </Button>
                </Modal.Footer>
            </Modal>
            <MyToasts showToats={showToats} toggleShow={toggleShow} text={textForToasts} bg="warning"></MyToasts>
        </section>
    )
})
export default ListControlUser