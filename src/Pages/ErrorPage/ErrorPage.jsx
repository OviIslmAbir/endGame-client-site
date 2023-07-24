import React from 'react';
import Lottie from "lottie-react";
import error from "../../assets/error.json";
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import useTitle from '../../Hook/useTitle';
const ErrorPage = () => {
    useTitle("404")
    return (
        <div className='container'>
            <div className="row align-items-center">
                <div className="col-lg-6">
                   <Lottie animationData={error} loop={true} />
                </div>
                <div className="col-lg-6 text-center">
                    <h1 className='mb-3'>404 Error</h1>
                    <h3  className='mb-3'>Ouch! Page not found</h3>
                    <Link to={'/'} className='btn btn-warning'><FaHome/> <span>Back to home page</span></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;