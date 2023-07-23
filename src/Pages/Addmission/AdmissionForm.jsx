import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaUser, FaBook, FaEnvelope, FaAddressCard, FaCalendar, FaImages} from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
const AdmissionForm = () => {
    const admission = useLoaderData() 
    const {user} = useContext(AuthContext)
    const handleAdmissionDetails = event => {
        event.preventDefault()
        const form = event.target
        const name = user?.displayName
        const subject = form.subject.value
        const email = user?.email
        const phoneNo = form.phone.value
        const address = form.address.value
        const dateOfBirth = form.birth.value
        const photo = user?.photoURL
        const collegeName = admission.college_name
        const collegeDetails  = admission.collegeDetails
        const admissionDetails = {
            name,
            subject,
            email,
            phoneNo,
            address,
            collegeName,
            collegeDetails,
            dateOfBirth,
            photo,
        }
        fetch('http://localhost:5000/admissionDetails', {
            method : "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admissionDetails)
        })
        .then(res => res.json())
         .then(data => {
            console.log(data)
             if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Admission form submit successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                form.reset()
             }
         })
    }
    return (
        <div className='container mt-3'>
            <h1 className='text-center fw-bold mb-3'>Admission Form</h1>
            <h4 className='text-center mb-3'>College name: {admission.college_name}</h4>
            <form onSubmit={handleAdmissionDetails}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="input-group mb-3">
                           <span className="input-group-text py-3" id="basic-addon1"><FaUser/></span>
                            <input defaultValue={user?.displayName} name='name' type="text" className="form-control py-3" placeholder="Candidate Name" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="input-group mb-3">
                           <span className="input-group-text py-3" id="basic-addon1"><FaBook/></span>
                            <input name='subject' type="text" className="form-control py-3" placeholder="Subject"aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="input-group mb-3">
                           <span className="input-group-text py-3" id="basic-addon1"><FaEnvelope/></span>
                            <input name='email' defaultValue={user?.email} type="email" className="form-control py-3" placeholder="Candidate Email"  aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="input-group mb-3">
                           <span className="input-group-text py-3" id="basic-addon1"><BsFillTelephoneFill/></span>
                            <input name='phone' type="number" className="form-control py-3" placeholder="Candidate Phone number"  aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="input-group mb-3">
                           <span className="input-group-text py-3" id="basic-addon1"><FaAddressCard/></span>
                            <input name='address' type="text" className="form-control py-3" placeholder="Address"  aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="input-group mb-3">
                           <span className="input-group-text py-3" id="basic-addon1"><FaCalendar/></span>
                            <input name='birth' type="date" className="form-control py-3"  aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="input-group mb-3">
                           <span className="input-group-text py-3" id="basic-addon1"><FaImages/></span>
                            <input name='photo' type="url" placeholder='Candidate Photo URL' className="form-control py-3" defaultValue={user?.photoURL}  aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <input type="submit" value={"Submit"}  className="form-control py-3 btn btn-warning w-100" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AdmissionForm;