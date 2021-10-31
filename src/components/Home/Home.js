import React from 'react';
import { Carousel } from 'react-bootstrap';
import s4 from '../../assets/banner/s4.jpg';
import s2 from '../../assets/banner/s2.jpg';
import s3 from '../../assets/banner/s3.jpg';
import './Home.css';

const Home = () => {
    return (
        <>
        <div className="container mt-3">
          <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block  width"
                src={s4}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className='text-warning'>Product waiting at your door</h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block  width"
                src={s2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Delivery is recieving</h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block  width"
                src={s3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className='text-warning'>Fast Delivery</h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
        
        </>
    );
};

export default Home;