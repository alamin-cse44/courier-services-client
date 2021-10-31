import { faArchive, faBell, faCartPlus, faCoffee, faHeart, faThumbsUp, faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const heart = <FontAwesomeIcon icon={faHeart} />
    const like = <FontAwesomeIcon icon={faThumbsUp} />
    const bell = <FontAwesomeIcon icon={faBell} />
    const truck = <FontAwesomeIcon icon={faTruckLoading} />
    const safe = <FontAwesomeIcon icon={faArchive} />
    const order = <FontAwesomeIcon icon={faCartPlus} />
    return (
        <div className='mt-5 bg-info'>
            <div className='container'>
            <div className="row p-5">
                <div className="col-sm-12 col-lg-4 mt-2">
                  <p className='fs-3 subscribe'>
                  <span>{heart}</span>
                  <span>{like}</span>
                  <span>{bell}</span>
                  </p>
                  <button className='btn btn-warning text-light fs-4'>Subscribe Us</button>
                </div>
                <div className="col-sm-12 col-lg-4 fs-5 mt-2">
                  <p>{truck} Fast Delivery</p>
                  <p>{safe} Safe Product</p>
                  <p>{order} Order First</p>
                </div>
                <div className="col-sm-12 col-lg-4 mt-2">
                   <h2>Layouts</h2>
                   <Link className='link' to='/'>Home</Link>
                   <Link className='link' to='/'>Services</Link>
                   <Link className='link' to='/login'>Login</Link>
                </div>
            </div>

            </div>
        </div>
    );
};

export default Footer;