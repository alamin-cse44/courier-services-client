import React from 'react';
import error from '../../assets/icons/banner_error_404.jpg';

const NotFound = () => {
    return (
        <div className='mt-3'>
            <img className='img-fluid w-100' src={error} alt="" />
        </div>
    );
};

export default NotFound;