import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { observer } from "mobx-react"
import { useContext, useEffect } from 'react';
import { Context } from '..';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneRequest, updataRequest } from '../http/requestAPI';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import MyToasts from '../components/toasts/MyToasts';



const AdminUpdata = observer(() => {
    const { requests } = useContext(Context)
    const navigate = useNavigate()
    const { id } = useParams()
    const [isLoaded, setIsLoaded] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [file, setFile] = useState(null)
    const [selectStatus, setSelectStatus] = useState(0)
    const [showFileUploader, setShowFileUploader] = useState(false)
    const [isWrite, setIsWrite] = useState("")
    const [showToats, setShowToats] = useState(false);
    const [textForToasts, setTextForToasts] = useState("Сообщение")
    const [bgToasts, setBgToasts] = useState("warning")
    const [isBeforImg, setIsBeforImg] = useState(true)


    const toggleShow = () => {
        setShowToats(prev => !prev)
    }



    useEffect(() => {
        if (selectStatus && selectStatus !== "3") {
            return setIsWrite(false)
        } else {
            setIsWrite(true)
        }
        if (selectStatus && file && selectStatus === "3") {
            setIsWrite(false)
        } else {
            setIsWrite(true)
        }
    }, [selectStatus, file])

    useEffect(() => {
        if (selectStatus === "3") {
            setShowFileUploader(true)
        } else {
            setShowFileUploader(false)
        }
    }, [selectStatus])


    useEffect(() => {
        try {
            getOneRequest(id).then(data => requests.setOneRequest(data))

            setTimeout(() => setIsLoaded(true), 1000)


        } catch (error) {
            setIsLoaded(false)
            return navigate("/admin/changeReq")
        }
    }, [])

    const backToList = () => {
        return navigate("/admin/changeReq")
    }






    const updataRequestFunction = async () => {
        try {
            if (!selectStatus) {
                setShowToats(prev => !prev)
                setBgToasts("danger")
                return setTextForToasts(`Ошибка: Не все поля заполнены`)
            }
            if (selectStatus && file && selectStatus === "3") {
                
                
                const formData = new FormData()
                formData.append("StatusId", selectStatus)
                formData.append("fileAftar", file)
                 await updataRequest( requests.oneRequest.reque.id ,formData)

                setBgToasts("success")
                setTextForToasts("Обновлено")
                setShowToats(prev => !prev)
                setShow(false)

            } else {
                const formData = new FormData()
                formData.append("StatusId", selectStatus)
                await updataRequest( requests.oneRequest.reque.id ,formData)


                setShow(false)
                setBgToasts("success")
                setTextForToasts("Обновлено")
                setShowToats(prev => !prev)
            }
        } catch (error) {
            setBgToasts("danger")
            setTextForToasts("Ошибка: " + error.message)
            setShowToats(prev => !prev)
        }
    }


    const thisCatygory = (CategorysId) => {
        let answer = ""
        requests.categoryss.filter(item => CategorysId === item.id ? answer = item.title : null)
        return answer
    }
    const thisStatus = (idStatus) => {
        let answer = ""
        requests.statuss.filter(item => idStatus === item.id ? answer = item.titleStatus : null)
        return answer
    }


    return (
        <main>
            <section className='wrapper marginBread'>
                <Breadcrumb>
                    <Breadcrumb.Item onClick={() => backToList()}>Список заявак</Breadcrumb.Item>
                    <Breadcrumb.Item active>now</Breadcrumb.Item>
                </Breadcrumb>
            </section>

            {
                isLoaded ?
                    <>
                        <h1 className='center'>Заявка: №{requests.oneRequest.reque.id}</h1>
                        <section className='wrapper changeRequests'>
                            <ul>
                                <li className='selfCardRequests'>
                                    <Card >
                                        <Card.Body style={{ width: "100%" }}>
                                            <Card.Header style={{ backgroundColor: "unset" }}>Заявка: {requests.oneRequest.reque.title}</Card.Header>
                                            <Card.Subtitle style={{ marginTop: "1vh" }} className="mb-2 text-muted">Категория: {thisCatygory(requests.oneRequest.reque.CategorysId)}</Card.Subtitle>
                                            <Card.Subtitle className="mb-2 text-muted">Статус: {thisStatus(requests.oneRequest.reque.StatusId)}</Card.Subtitle>
                                            <Card.Text style={{ maxWidth: "90%" }}>
                                                Описание: {requests.oneRequest.reque.description}
                                            </Card.Text>
                                            <div style={{ marginTop: "auto", display: "flex", justifyContent: "center", flexDirection: "column-reverse" }}>
                                                <Card.Text>Создано: {requests.oneRequest.reque.createdAt.substr(0, 10)}</Card.Text>
                                                <Card.Text >Обновлено: {requests.oneRequest.reque.updatedAt.substr(0, 10)}</Card.Text>

                                            </div>
                                            <Button variant="success" onClick={() => setShow(prev => !prev)}>Обновить</Button>
                                        </Card.Body>
                                    </Card>

                                    <div className="lastRequestImg">
                                        {
                                            isBeforImg && (selectStatus !== "3")?
                                            <img onMouseOver={()=>setIsBeforImg(prev=>!prev)} src={process.env.REACT_APP_BASE_URL + requests.oneRequest.reque.file} alt={requests.oneRequest.reque.file} />
                                            :
                                            <img onMouseOut={()=>setIsBeforImg(prev=>!prev)} src={process.env.REACT_APP_BASE_URL + requests.oneRequest.reque.fileAftar} alt={requests.oneRequest.reque.fileAftar} />
                                        }
                                    </div>
                                </li>

                            </ul>
                        </section>

                    </>
                    :
                    <div class="spinner-border wrapper center" style={{ width: "20vh", height: "20vh", display: "block" }} role="status">
                    </div>
            }
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Редактирование</Modal.Title>
                </Modal.Header>
                <Form style={{ margin: "0 2vh" }}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='mt-2'>Выберите статус заявки:</Form.Label>
                        <Form.Select value={selectStatus} onChange={e => setSelectStatus(e.target.value)} aria-label="Default select example">

                            <option selected disabled value="0">Выбирите статус</option>
                            {
                                requests.statuss.map((item) =>
                                    <option key={item.id} value={item.id}>{item.titleStatus}</option>
                                )
                            }
                        </Form.Select>
                        {
                            showFileUploader ?
                                <>
                                    <Form.Label className='mt-3'>Загрузите фото завершенной работы (обязательно)</Form.Label>
                                    <Form.Control onChange={(e) => setFile(e.target.files[0])} type='file' />
                                </>
                                :
                                null
                        }
                    </Form.Group>
                </Form>
                <Modal.Footer>
                    <Button disabled={isWrite} variant="success" onClick={() => updataRequestFunction()}>
                        Подтверждаю
                    </Button>
                </Modal.Footer>
            </Modal>
            <MyToasts showToats={showToats} toggleShow={toggleShow} text={textForToasts} bg={bgToasts}></MyToasts>
        </main>
    )
})
export default AdminUpdata