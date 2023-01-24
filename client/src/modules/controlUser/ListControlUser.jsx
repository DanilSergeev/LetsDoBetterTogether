import ListGroup from 'react-bootstrap/ListGroup';

export default function ListControlUser() {
    return (
        <section className='wrapper mt-5'>
            <ListGroup as="ol">
            <ListGroup.Item as="li">
                    <div className="listUser ms-2 me-auto">
                        <p>Временная метка</p>
                        <p>Название</p>
                        <p>Категория заявки</p>
                        <p>Статус: nnnn</p>
                        <div className='imgList'>
                            <img src="https://avatars.mds.yandex.net/i?id=1d3a7f4b63e9fe0106cdbe8a12d741310f85f749-8172990-images-thumbs&n=13" alt="" />
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <div className="listUser ms-2 me-auto">
                        <p>Временная метка</p>
                        <p>Название</p>
                        <p>Категория заявки</p>
                        <p>Статус: nnnn</p>
                        <div className='imgList'>
                            <img src="https://avatars.mds.yandex.net/i?id=1d3a7f4b63e9fe0106cdbe8a12d741310f85f749-8172990-images-thumbs&n=13" alt="" />
                        </div>
                    </div>
                </ListGroup.Item>

                <ListGroup.Item as="li">
                    <div className="listUser ms-2 me-auto">
                        <p>Временная метка</p>
                        <p>Название</p>
                        <p>Категория заявки</p>
                        <p>Статус: nnnn</p>
                        <div className='imgList'>
                            <img src="https://avatars.mds.yandex.net/i?id=1d3a7f4b63e9fe0106cdbe8a12d741310f85f749-8172990-images-thumbs&n=13" alt="" />
                        </div>
                    </div>
                </ListGroup.Item>

            </ListGroup>

        </section>
    )
}