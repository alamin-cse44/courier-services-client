import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();

    const handleAddService = e =>{

        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;

        const newUser = {name, description, price, img};
        fetch('https://pure-falls-57549.herokuapp.com/services', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('user added successfully!');
                e.target.reset();
            }
        })

        e.preventDefault();
    }

     return (
        <div className="container">
            <h2 className="text-center mt-2">Please add a service</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
            <div className="col m-auto">
                <div className="card h-100 card-bg text-center shadow">
                    {/* img */}
                <div className="card-body p-5">

                <form onSubmit={handleAddService}>
                    <input className="w-100 " type="text" ref={nameRef} placeholder='name' /> <br /><br />
                    <textarea className="w-100 " type="text"  ref={descriptionRef} placeholder='description' />
                    <br /><br />
                    <input className="w-100" type="text" ref={priceRef} placeholder='price' />
                    <br /><br />

                    <input className="w-100" type="text" ref={imgRef} placeholder='image-url' />
                    <br /><br />
            
                    <input className="rounded p-1 w-75 bg-success text-light fw-5 mb-2" type="submit" value="Add" />
                    
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AddUser;