import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('https://pure-falls-57549.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    } ,[])
    return (
        <div className='container mt-5'>
            <h2 className='text-center text-success'>Services</h2>

            <div className="row row-cols-1 row-cols-md-3 g-4">
               {
                 services.map(service => <div key={service._id}>
                <div className="col mt-5">
                <div className="card h-100 text-center shadow rounded">
                <img src={service.img}  className="card-img-top w-50 p-2 m-auto rounded" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.description}</p>
                <h5>Price : {service.price}</h5>
                <Link to={`/details/show/${service._id}`} className="btn btn-primary px-2 fs-5">Take service</Link>
            </div>
            </div>
        </div>
                 </div>)
               }
            </div>
        </div>
    );
};

export default Services;