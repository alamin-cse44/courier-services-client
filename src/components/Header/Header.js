import { faCoffee, faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const logo = <FontAwesomeIcon icon={faTruckLoading} />
    const {user,logOut} = useAuth();
    console.log(user);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid container">
                <Link to='/' className="navbar-brand">
                <p className='text-danger mt-2 fs-2'>{logo}</p>
                  </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <a href='/' className="nav-link active" aria-current="page"><NavLink className="a" to="/">Home</NavLink> </a>
                        </li>
                       
                        <li className="nav-item">
                        <a href='/showServices' className="nav-link active text-light" aria-current="page" ><NavLink className="a" to="/showServices">Services</NavLink> </a>
                        </li>
                        <li className="nav-item">
                        {
                            user.email ? <a href='/adduser' className="nav-link active" aria-current="page" ><NavLink className="a" to="/adduser">Add Service </NavLink> </a>:''
                        }
                        </li>

                        <li className="nav-item">
                        {
                            user.email ? <a href='/adduser' className="nav-link active" aria-current="page" ><NavLink className="a" to="/adduser">{user.displayName} </NavLink> </a>:''
                        }
                        </li>

                        <li className="nav-item">
                        {user.email && 
                        <span className='text-light'><img className='w-25 rounded-circle me-2' src={user?.photoURL} alt="" /></span>}   
                        {
                            user.email ? 
                            <button className="mt-2" onClick={logOut}>logout </button>
                            :<a className="nav-link active" aria-current="page" ><NavLink className="a" to="/login">Login</NavLink> </a>
                        }
                        </li>
                        
                    </ul>
                    </div>
                </div>
                </nav>
        </div>
    );
};

export default Header;