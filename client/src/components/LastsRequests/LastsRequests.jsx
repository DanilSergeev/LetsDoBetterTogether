import Card from 'react-bootstrap/Card';


export default function LastsRequests() {
    return (
        <section className='wrapper center lastRequest'>
            <h2>Последние решенные заявки</h2>
            <ul>
                {[...Array(4)].map((_, index) =>
                    <li>
                            <Card className='selfCardLastRequest' >
                                <Card.Body style={{width: "100%"}}>
                                    <Card.Header>Заявка: №{index}</Card.Header>
                                    <Card.Title>Это название</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Категория: котики</Card.Subtitle>
                                    <Card.Text style={{maxWidth: "90%"}}>
                                        Описание: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, commodi neque porro sequi ab molestiae voluptas dolorem officiis! Officia quia dicta ex.
                                    </Card.Text>
                                    <Card.Text style={{marginTop: "auto", fontWeight:"bold"}}>Решено: {Date(Date.now())}</Card.Text>
                                </Card.Body>
                            </Card>


                        <div className="lastRequestImg">
                            <img src="https://mirpozitiva.ru/wp-content/uploads/2019/11/1480494344_kot_sneg.jpg" alt="" />
                        </div>
                    </li>
                )}

            </ul>
        </section>
    )
}