import Carousel from 'react-bootstrap/Carousel';
import first from "../../style/img/first.jpg"
import second from "../../style/img/second.jpg"
import three from "../../style/img/three.jpg"

export default function HomePageCarusel (){
    return(
        <Carousel indicators={false} variant="dark" slide={true}>
                <Carousel.Item interval={4000}>
                    <img
                        className=" w-100 caruselIMG"
                        src={first}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className=" w-100 caruselIMG"
                        src={second}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img

                        className=" w-100 caruselIMG"
                        src={three}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
    )
}