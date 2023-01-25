import Carousel from 'react-bootstrap/Carousel';

export default function HomePageCarusel (){
    return(
        <Carousel variant="dark" slide={true}>
                <Carousel.Item interval={4000}>
                    <img
                        className=" w-100 caruselIMG"
                        src="https://www.hs-kl.de/fileadmin/hochschule/referate/hochschulkommunikation/pressemitteilung/zw/pm-dateien/stadt_der_zukunft.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className=" w-100 caruselIMG"
                        src="https://www.summanengineering.com/images/department/cLmOuQSR9DqUEhGgdyrsulNa9MiNwvYG.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img

                        className=" w-100 caruselIMG"
                        src="https://flyingarchitecture.com/storage/images/12455/75_Rublyovo-Arkhangelskoye-5.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
    )
}