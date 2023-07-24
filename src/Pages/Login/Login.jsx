import React, { useContext } from 'react';
import Lottie from "lottie-react";
import ani from "../../assets/ani.json";
import { FaKey, FaEnvelope, FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import useTitle from '../../Hook/useTitle';
const Login = () => {
    useTitle("Login")
    const {login, forgetPassword, googleLogin, facebookLogin} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const pass = form.pass.value
        login(email, pass)
          .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from)
            Swal.fire({
                title: 'Success!',
                text: 'User login successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            })
          })
          .catch(error => console.log(error))
    }
    const handleForgotPass = ()  => {
        const email = document.getElementById('email').value
        forgetPassword(email)
        .then((result) => {
            Swal.fire({
                title: 'Success!',
                text: 'Forgot password mail send successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        })
        .catch(error => console.log(error))
    }
    const handleGoogle = () => {
        googleLogin()
        .then((result) => {
            const loggedUser = result.user
            console.log(loggedUser)
            const userDetails = {name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL, address: "N/A", college: "N/A", dateOfBirth: "N/A", age:"N/A", phoneNo: "N/A"}
            fetch('https://end-game-server-site.vercel.app/users', {
                method: "POST",
                headers: {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(userDetails)
               })
                .then(res => res.json())
                .then(data => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'User login successfully',
                            icon: 'success',
                            confirmButtonText: 'OK'
                         })

                        navigate(from)
                    })
        })
        .catch(error => console.log(error))
    }
    const handleFacebook = () => {
        facebookLogin()
        .then((result) => {
            const loggedUser = result.user
            console.log(loggedUser)
            const userDetails = {name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL, address: "N/A", college: "N/A", dateOfBirth: "N/A", age:"N/A", phoneNo: "N/A"}
            fetch('https://end-game-server-site.vercel.app/users', {
                method: "POST",
                headers: {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(userDetails)
               })
                .then(res => res.json())
                .then(data => {
                        Swal.fire({
                                title: 'Success!',
                                text: 'User login successfully',
                                icon: 'success',
                                confirmButtonText: 'OK'
                        })
                        
                        navigate(from)
                    })
        })
        .catch(error => console.log(error))
    }
    return (
        <div className='container'>
            <div className="row align-items-center">
                <div className="col-lg-6">
                   <Lottie animationData={ani} loop={true} />
                </div>
                <div className="col-lg-6 shadow-lg">
                    <form onSubmit={handleLogin} action="" className='p-5'>
                        <h2 className='text-center fw-bold mb-3'>Please Login</h2>
                        <div className="input-group mb-3">
                            <span className="input-group-text py-3" id="basic-addon1"><FaEnvelope/></span>
                            <input name='email' type="email" className="form-control py-3" placeholder="Enter your email" id='email' aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-1">
                            <span className="input-group-text py-3" id="basic-addon1"><FaKey/></span>
                            <input name='pass' type="password" className="form-control py-3" placeholder="Enter your password"  aria-describedby="basic-addon1"/>
                        </div>
                        <p className='text-end'><a onClick={handleForgotPass} className='mb-3' style={{textDecoration:"none", textAlign:"right", cursor:"pointer"}}><small>Forgot password?</small></a></p>
                        <input className='w-100 btn btn-warning py-3 mb-3' type="submit" value="Login" />
                        <p className='text-center'>Don't Have An Account ? <Link className='text-danger' to='/register' style={{textDecoration:"none"}}>Register</Link></p>
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

export default Login;