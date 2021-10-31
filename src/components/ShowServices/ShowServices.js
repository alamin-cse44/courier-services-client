import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const ShowServices = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('https://pure-falls-57549.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    } ,[]);

    // delete an user
    const handleDeleteUser = id =>{
        const proceed = window.confirm('Are u sure, u want to delete the service?');
        if(proceed){
            const url = `https://pure-falls-57549.herokuapp.com/users/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount>0){
                alert('deleted successfully!');
                const remainingUsers = services.filter(service=> service._id !== id);
                setServices(remainingUsers);
            }
        });
        }
    }

    return (
        <div className='container mt-5'>
            <h2 className='text-center text-success'>Services</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
               {
                 services.map(service => <div key={service._id}>
                <div className="col mt-5">
                <div className="card h-100 text-center shadow rounded">
                <img src={service.img}  className="card-img-top w-75 p-2 m-auto rounded" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.description}</p>
                <h5>Price : {service.price}</h5>
                <Link to={`/details/show/${service._id}`}><button className='btn btn-primary me-2'>Take Service</button></Link>
                <Link to={`/services/update/${service._id}`}><button className='btn btn-info me-2'>Update</button></Link>
                {/* <button className='btn btn-danger' onClick={() => handleDeleteUser(service._id)}>Delete</button> */}
            </div>
            </div>
        </div>
                 </div>)
               }
            </div>
        </div>
    );
};

export default ShowServices;