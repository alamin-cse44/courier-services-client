import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import s1 from '../../assets/banner/s1.jpg';
import client from '../../assets/icons/client.jpg';

const AboutServices = () => {
    const star = <FontAwesomeIcon icon={faStar} />
    const like = <FontAwesomeIcon icon={faThumbsUp} />
    return (
        <div className='mt-5 container'>
          <div className='abount-container mt-5'>
            <h2 className='text-center'>About Our Services</h2> 
            <div className='row d-flex justify-content-center align-items-center mt-5'>
               
                <img className='img-fluid col-lg-6 mb-2' src={s1} alt="" />
               
                <div className='fs-5 bg-success text-light p-2 col-lg-6'>
                    <ul>
                        <li>Using a local courier service makes the best use of your time. That means you don’t have to wait days for a delivery or pay astronomical overnight fees.</li>
                        <li> By scheduling online and getting a quick quote you can track your delivery and save any electronic information for your business files.</li>
                        <li>You can also count on them after hours and during weekends.</li>
                        <li>Local couriers offer affordable rates than big delivery companies, who can charge ridiculous prices for their services.</li>
                    </ul>
                </div>
            </div>

            <div className='client-section mt-5'>
                <h2 className='text-center text-primary'>What client says</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
            <div className="col m-auto">
                <div className="card h-100 card-bg text-center shadow mt-5">
                    <img className='rounded-circle w-50 mx-auto p-2' src={client} alt="" />
                <div className="card-body p-5">

                <p className='text-warning'>{star}{star}{star}{star}{star}</p>
                <p>Using a local courier service makes the best use of your time. That means you don’t have to wait days for a delivery or pay astronomical overnight fees.
                By scheduling online and getting a quick quote you can track your delivery and save any electronic information for your business files.</p>
                    <h2>{like}</h2>
                    
                </div>
                </div>
            </div>
            </div>
            </div>
         </div>
        </div>
    );
};

export default AboutServices;