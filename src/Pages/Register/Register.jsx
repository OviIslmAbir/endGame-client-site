import React, { useContext } from 'react';
import Lottie from "lottie-react";
import login from "../../assets/ani.json";
import { FaKey, FaEnvelope, FaUser, FaImage, FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
const Register = () => {
    const {createUser, updateUserProfile, googleLogin, facebookLogin} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const pass = form.pass.value
        createUser(email, pass)
          .then(result => {
            const newUser = result.user;
            console.log(newUser);
            updateUserProfile(name, photo)
            Swal.fire({
                title: 'Success!',
                text: 'User register successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            })
            navigate(from)
          })
          .catch(error => console.log(error))
    }
    const handleGoogle = () => {
        googleLogin()
        .then(() => {
            Swal.fire({
                title: 'Success!',
                text: 'User register successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            })
            navigate(from)
        })
        .catch(error => console.log(error))
    }
    const handleFacebook = () => {
        facebookLogin()
        .then(() => {
            Swal.fire({
                title: 'Success!',
                text: 'User register successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            })
            navigate(from)
        })
        .catch(error => console.log(error))
    }
    return (
    <div className='container'>
        <div className="row align-items-center">
            <div className="col-lg-6">
               <Lottie animationData={login} loop={true} />
            </div>
            <div className="col-lg-6 shadow-lg">
                <form onSubmit={handleRegister} action="" className='p-5'>
                    <h2 className='text-center fw-bold mb-3'>Please Register</h2>
                    <div className="input-group mb-3">
                        <span className="input-group-text py-3" id="basic-addon1"><FaUser/></span>
                        <input name="name" type="text" className="form-control py-3" placeholder="Enter your name"  aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text py-3" id="basic-addon1"><FaEnvelope/></span>
                        <input name="email" type="email" className="form-control py-3" placeholder="Enter your email"  aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text py-3" id="basic-addon1"><FaImage/></span>
                        <input name="photo" type="url" className="form-control py-3" placeholder="Enter your Image"  aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text py-3" id="basic-addon1"><FaKey/></span>
                        <input name='pass' type="password" className="form-control py-3" placeholder="Enter your password"  aria-describedby="basic-addon1"/>
                    </div>
                    <input className='w-100 btn btn-warning py-3 mb-3' type="submit" value="Register" />
                    <p className='text-center'>Already have an account? <Link className='text-danger' to='/login' style={{textDecoration:"none"}}>Login</Link></p>
                    <hr />
                        <div className='d-flex align-items-center gap-2 justify-content-center'>
                           <button onClick={handleGoogle} className='btn btn-outline-dark d-flex align-items-center gap-2'><FaGoogle/><span>Login with Google</span></button> 
                           <button onClick={handleFacebook} className='btn btn-outline-primary d-flex align-items-center gap-2'><FaFacebook/><span>Login with Facebook</span></button> 
                        </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;