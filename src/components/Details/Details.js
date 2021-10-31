import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const {user} = useAuth();
    const [service, setService] = useState({});
    const {id} = useParams();

    const location = useLocation();
    const history = useHistory();
    console.log('came from ', location.state?.from);
    const redirect_uri = location.state?.from || `/details/show/${id}`;
    // history.push(redirect_uri);

    useEffect( ()=>{
        const url = `https://pure-falls-57549.herokuapp.com/services/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // history.push(redirect_uri);
            setService(data)});
    } ,[]);    

    return (
        <div>
            <div className='text-center'>
                <h3>Welcome, {user.displayName}</h3>
                <h6>Your mail is : {user.email}</h6>
                <p className='text-success fs-5'>Please click the confirm button for confirmation.</p>
            </div>

            <div className="container">
            <h2 className="text-center mt-2">Details of the service</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
            <div className="col m-auto">
                <div className="card h-100 card-bg text-center shadow">
                   <img className='w-75 m-auto p-2' src={service.img} alt="" />
                <div className="card-body p-5">
                    <h2>{service.name}</h2>
                    <p>{service.description}</p>
                    <h5>Price : {service.price}</h5>
                    <Link to={`/myorders/show/${service._id}`} className="btn btn-primary px-2 fs-5 me-2">Confirm</Link>
                    <Link to='/showServices' className="btn btn-primary px-2 fs-5">Go Back</Link>
                </div>
                </div>
            </div>
            </div>
        </div>


        </div>
    );
};

export default Details;