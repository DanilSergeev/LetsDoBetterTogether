import Card from 'react-bootstrap/Card';
import { observer } from "mobx-react"
import { useContext } from 'react';
import { Context } from '../..';
import { useState } from 'react';

const LastsRequests = observer(() => {
    const { requests } = useContext(Context)
    const [isBeforImg, setIsBeforImg] = useState(true)

    const thisCatygory = (CategorysId) =>{
        let answer = ""
        requests.categoryss.filter(item=> CategorysId === item.id? answer = item.title  : null )
        return answer
    }
    const thisStatus = (idStatus) =>{
        let answer = ""
        requests.statuss.filter(item=> idStatus === item.id? answer = item.titleStatus  : null )
        return answer
    }


    return (
        <section className='wrapper center lastRequest'>
            <h2>Последние решенные заявки</h2>
            <ul>
                {

                    requests.requestss.filter(item=>item.StatusId===3).map((item)=>
                    <li key={item.id}>
                            <Card className='selfCardLastRequest' >
                                <Card.Body style={{width: "100%"}}>
                                    <Card.Header>Заявка: №{item.id}</Card.Header>
                                    <Card.Title>Название: {item.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Категория: { thisCatygory(item.CategorysId) }</Card.Subtitle>
                                    <Card.Text style={{maxWidth: "90%"}}>
                                        Описание: {item.description}
                                    </Card.Text>
                                    <Card.Text style={{marginTop: "auto", fontWeight:"bold"}}>Решено: {item.updatedAt.substr(0,10)}</Card.Text>
                                </Card.Body>
                            </Card>


                        <div className="lastRequestImg">
                            {
                                isBeforImg?
                                <img onMouseOver={()=>setIsBeforImg(prev=>!prev)} src={process.env.REACT_APP_BASE_URL + item.file} alt={item.title} />
                                :
                                <img onMouseOut={()=>setIsBeforImg(prev=>!prev)} src={process.env.REACT_APP_BASE_URL + item.fileAftar} alt={item.title} />
                            }
                        </div>
                    </li>
                    
                    ).reverse().slice(0,4)
                }

            </ul>
        </section>
    )
})
export default LastsRequests