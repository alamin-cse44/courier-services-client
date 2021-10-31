import React from 'react';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    return (
        <div className='text-center'>
            <h2>Your Order is Pending!</h2>
            <Link to='/showServices' className="btn btn-primary px-2 fs-5">Go Back</Link>
        </div>
    );
};

export default MyOrders;