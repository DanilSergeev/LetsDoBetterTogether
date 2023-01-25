// import { useContext } from 'react';
import { observer } from "mobx-react"
// import { Context } from '../..';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const CreateControl = observer(() => {
    // const { user } = useContext(Context)

    return (
        <Card style={{ padding: "2vh", width: '38rem' }}>
            <Card.Body>
                <Card.Img style={{ width: '9rem' }} />
                <Card.Title style={{ textAlign: "center", fontSize: "26px" }}>Форма создания заявки</Card.Title>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='mt-2'>Введите название</Form.Label>
                        <Form.Control type="email" placeholder="Введите название" />

                        <Form.Label className='mt-3'>Введите описание </Form.Label>
                        <Form.Control as="textarea" placeholder="Введите описание" />

                        <Form.Label className='mt-3'>Выбирите категорию </Form.Label>
                        <Form.Select defaultValue="default" aria-label="Default select example">
                            <option disabled value="default">Выбирите категорию</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>

                        <Form.Label className='mt-3'>Загрузите фото (обязательно)</Form.Label>
                        <Form.Control type='file'  />
                    </Form.Group>
                </Form>

                <Button variant="success"><Link to="/login" className='link_a'>Зарегистрироватся</Link></Button>
                <Card.Body>
                </Card.Body>
            </Card.Body>
        </Card>
    )
})
export default CreateControl