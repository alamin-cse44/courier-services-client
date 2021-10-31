import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Login.css';
import g from '../../assets/icons/g.jpg';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const google = <FontAwesomeIcon icon={faCoffee} />
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    console.log('came from ', location.state?.from);
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
           history.push(redirect_uri); 
        })
    }
    return (
        <div className='container mt-5'>
            <div className='row d-flex align-items-center'>
                <div className='col-lg-4 mb-2'>
                    <h2>Please Login </h2>
                    <button onClick={handleGoogleLogin} className='btn btn-warning text-light mt-3'>Sign in with Google</button>
                </div>

                <img className='img-fluid col-lg-8' src={g} alt="" /> 
            </div>
            
        </div>
    );
};

export default Login;