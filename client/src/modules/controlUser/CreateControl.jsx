import { observer } from "mobx-react"
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Context } from "../..";
import { useContext } from "react";
import { useState } from "react";
import { createRequest } from "../../http/requestAPI";
import MyToasts from "../../components/toasts/MyToasts";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";


const CreateControl = observer(() => {
    const navigate = useNavigate()
    const { requests } = useContext(Context)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState(Number)
    const [file, setFile] = useState(null)
    const [textForToasts, setTextForToasts] = useState("Сообщение")
    const [isWrite, setIsWrite] = useState(true)


    useEffect(()=>{
        if(title && description && category && file){
            setIsWrite(false)
        }else{
            setIsWrite(true)
        }
    },[title, description, category, file])

    const createRequestsFunction = async () => {
        try {
            if (!title || !description || !category || !file) {
                setShowToats(prev => !prev)
                return setTextForToasts(`Ошибка: Не все поля заполнены`)
            }

            const formData = new FormData()
            formData.append("title", title)
            formData.append("description", description)
            formData.append("CategorysId", category)
            formData.append("StatusId", 1)
            formData.append("file", file)


            
            const response = await createRequest(formData)
            requests.setRequests([
                ...requests.requestss,
                {
                    id: response.reque.id,
                    title: response.reque.title,
                    description: response.reque.description,
                    StatusId: response.reque.StatusId,
                    CategorysId: response.reque.CategorysId,
                    file: response.reque.file,
                    fileAftar: response.reque.fileAftar,
                    createdAt: response.reque.createdAt,
                    updatedAt: response.reque.updatedAt
                }
            ])
            return navigate("/")

        } catch (error) {
            setTextForToasts("Ощибка: " + error.message)
            setShowToats(prev => !prev)
        }
    }

    const [showToats, setShowToats] = useState(false);
    const toggleShow = () => {
        setShowToats(prev => !prev)
    }

    return (
        <Card style={{ padding: "2vh", width: '38rem' }}>
            <Card.Body>
                <Card.Img style={{ width: '9rem' }} />
                <Card.Title style={{ textAlign: "center", fontSize: "26px" }}>Форма создания заявки</Card.Title>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='mt-2'>Введите название</Form.Label>
                        <Form.Control value={title} onChange={e => setTitle(e.target.value)} type="email" placeholder="Введите название" />

                        <Form.Label className='mt-3'>Введите описание </Form.Label>
                        <Form.Control value={description} onChange={e => setDescription(e.target.value)} as="textarea" placeholder="Введите описание" />

                        <Form.Label className='mt-3'>Выбирите категорию </Form.Label>
                        <Form.Select value={category} onChange={e => setCategory(e.target.value)} aria-label="Default select example">
                            <option selected disabled value="0">Выбирите категорию</option>
                            {
                                requests.categoryss.map((item) =>
                                    <option key={item.id} value={item.id}>{item.title}</option>
                                )
                            }
                        </Form.Select>

                        <Form.Label className='mt-3'>Загрузите фото (обязательно)</Form.Label>
                        <Form.Control onChange={(e) => setFile(e.target.files[0])} type='file' />
                    </Form.Group>
                </Form>

                <Button disabled={isWrite} onClick={() => createRequestsFunction()} variant="success">Создать</Button>
                <Card.Body>
                </Card.Body>
            </Card.Body>
            <MyToasts showToats={showToats} toggleShow={toggleShow} text={textForToasts} bg="danger"></MyToasts>
        </Card>
    )
})
export default CreateControl