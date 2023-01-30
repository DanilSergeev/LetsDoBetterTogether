import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { observer } from "mobx-react"
import { useContext, useEffect } from 'react';
import { Context } from '..';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneRequest } from '../http/requestAPI';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';



const AdminUpdata = observer(() => {
    const { requests } = useContext(Context)
    const navigate = useNavigate()
    const {id} = useParams()
    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(()  => {
        try {
            getOneRequest(id).then(data => requests.setOneRequest(data))

            setTimeout(()=>setIsLoaded(true),10)
            
            
        } catch (error) {
            setIsLoaded(false)
        }
    }, [])

    const backToList = () => {
        return navigate("/admin/changeReq")
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
                                            <Card.Subtitle style={{marginTop: "1vh"}} className="mb-2 text-muted">Категория: {requests.oneRequest.reque.CategorysId}</Card.Subtitle>
                                            <Card.Subtitle className="mb-2 text-muted">Статус: {requests.oneRequest.reque.StatusId}</Card.Subtitle>
                                            <Card.Text style={{ maxWidth: "90%" }}>
                                                Описание: {requests.oneRequest.reque.description}
                                            </Card.Text>
                                            <Card.Text style={{ marginTop: "auto", fontWeight: "bold" }}>Создано: {requests.oneRequest.reque.createdAt}</Card.Text>
                                            <Card.Text style={{ marginTop: "auto", fontWeight: "bold" }}>Обновлено: {requests.oneRequest.reque.updatedAt}</Card.Text>
                                            <Button variant="success">Редактировать</Button>
                                        </Card.Body>
                                    </Card>

                                    <div className="lastRequestImg">
                                        <img src={process.env.REACT_APP_BASE_URL + requests.oneRequest.reque.file} alt="" />
                                    </div>
                                </li>

                            </ul>
                        </section>

                    </>
                    :
                    <h2>Пользователь не найден</h2>
            }

        </main>
    )
})
export default AdminUpdata