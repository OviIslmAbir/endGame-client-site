import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import {Tooltip} from 'react-tooltip';
const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
          .then(() => {})
          .catch(() => {})
    }
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}>Collage Admission</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link to='/' className="nav-link active me-4 fw-bold" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/colleges' className="nav-link me-4 fw-bold">Colleges</Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/admission' className="nav-link me-4 fw-bold">Admission</Link>
                            </li>
                            {
                                user ? 
                                <li>
                                   <Link to='/myCollege' className='nav-link me-4 fw-bold'>My College</Link>
                                </li> : <></>
                            }
                        </ul>
                        <div>
                            {
                                user ? 
                                <div className='d-flex gap-2 align-items-center'>
                                <button onClick={handleLogout} className='btn btn-warning px-3'>Log Out</button> 
                                <Link to='/userProfile'>
                                    <img 
                                        data-tooltip-id="tooltip" data-tooltip-content={user.displayName}
                                        style={{width:"40px", height:"40px", borderRadius:"50%", cursor:"pointer"}} 
                                        src={user.photoURL} alt="" 
                                    /> 
                                </Link>
                                <Tooltip id="tooltip" place="right" effect="solid"  />
                                </div>:
                                <Link to='/login' className='btn btn-warning px-4'>Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;