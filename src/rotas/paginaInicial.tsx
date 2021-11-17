import { Carousel } from 'react-bootstrap';
import '../estilos/paginaInicial.css';

function PaginaInicial() {
    return (
        <>
            <Carousel className="carrossel">
                <Carousel.Item>
                    <img style={{ height: "400px", width: "100%" }}
                        className="img-carrossel"
                        src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_960_720.jpg"
                        alt="primeira foto do carrossel, casa na beira do lago com vegetação do lado"
                    />
                    <Carousel.Caption>
                        <h3>Venha ter a melhor experiência com nossas diversas opções de acomodações</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "400px", width: "100%" }}
                        className="img-carrossel"
                        src="https://images.unsplash.com/photo-1563148760-64687068abdf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        alt="segunda foto do carrossel, casa de madeira com vegetação ao lado"
                    />

                    <Carousel.Caption>
                        <h3>Desde resorts até apartamentos, do jeito que você procura</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "400px", width: "100%" }}
                        className="img-carrossel"
                        src="https://cdn.pixabay.com/photo/2019/09/12/15/21/resort-4471852_960_720.jpg"
                        alt="terceira foto do carrossel, hotel construído em base acima da água"
                    />

                    <Carousel.Caption>
                        <h3>Prezamos por sua segurança e conforto</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default PaginaInicial;
