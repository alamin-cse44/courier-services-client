import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateService = () => {
    const [service, setService] = useState({});
    const {id} = useParams();

    useEffect( ()=>{
        const url = `https://pure-falls-57549.herokuapp.com/services/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data));
    } ,[]);

    const handleNameChange = e =>{
        const updatedName = e.target.value;
        const updatedService = {name: updatedName, description: service.description, price: service.price, img:service.img};
        setService(updatedService);
    }

    const handleDescription = e =>{
        const updatedDescription = e.target.value;
        const updatedService = {name: service.name, description: updatedDescription, price: service.price, img:service.img};
        setService(updatedService);
    }

    const handlePrice = e =>{
        const updatedPrice = e.target.value;
        const updatedService = {name: service.name, description: service.description, price: updatedPrice, img:service.img};
        setService(updatedService);
    }

    const handleImg = e =>{
        const updatedImg = e.target.value;
        const updatedService = {name: service.name, description: service.description, price: service.price, img:updatedImg};
        setService(updatedService);
    }


    const handleUpdateService = e =>{
        const url = `https://pure-falls-57549.herokuapp.com/services/${id}`;
        fetch(url, {
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('updated successfully.');
                setService({});
            }
        })
        e.preventDefault();
    }
    return (
        <div className="container">
            <h2 className="text-center mt-2">Update the service</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
            <div className="col m-auto">
                <div className="card h-100 card-bg text-center shadow">
                    {/* img */}
                <div className="card-body p-5">

                <form onSubmit={handleUpdateService}>

                <input className="w-100" type="text" onChange={handleNameChange} value={service.name || ''} /> <br /><br />
                <textarea className="w-100" type="text" onChange={handleDescription} value={service.description || ''} /> <br /><br />
                <input className="w-100" type="text" onChange={handlePrice} value={service.price || ''} /> <br /><br />
                <input className="w-100" type="text" onChange={handleImg} value={service.img || ''} /> <br /><br />
                
                <input className="bg-success text-light p-1 w-100" type="submit" value="update" />

                </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default UpdateService;