import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEdit, FaUser, FaImages, FaSchool, FaCalendar, FaAddressCard} from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { SiNumba } from 'react-icons/si';
import useTitle from '../../Hook/useTitle';
const UserProfile = () => {
    useTitle("My profile")
    const {user} = useContext(AuthContext)
    const [myProfile, setMyProfile] = useState([])
    useEffect(() => {
        fetch(`https://end-game-server-site.vercel.app/users?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyProfile(data))
    }, [])
    const my = myProfile.find(my => my)
    const handleSave = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const phoneNo = form.phone.value
        const age = form.age.value
        const college = form.college.value
        const address = form.address.value
        const dateOfBirth = form.date.value
        const saveChange = {
            name,
            photo,
            phoneNo,
            age,
            college,
            address,
            dateOfBirth
        }
        fetch(`https://end-game-server-site.vercel.app/users/${my._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveChange)
        })
          .then(res => res.json())
          .then(data => {
             if(data.modifiedCount > 0){
                window.location.reload()
             }
          })
    }
    return (
        <div className='container mt-3'>
            <h3 className='fw-bold text-center'>My Profile</h3>
            {myProfile.map(my =>  
            <div key={my._id}>
                <div className='row align-items-center'>
                    <div className='col-lg-6'>
                        <div className='mt-4 d-flex align-items-center gap-2'>
                            <img style={{height:"45px", width:"45px", borderRadius:"50%"}} src={my.photo} alt="" />
                            <h2 className='fw-bold'>{my.name}</h2>
                        </div>
                    </div>
                    <div className='col-lg-6 mt-3 text-lg-end'>
                        <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <FaEdit className='me-2'/>
                           <span>Edit Profile</span>
                        </button>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-6 mt-3">
                        <p style={{fontSize:"20px"}}><span className='fw-bold'>Email:</span> {my.email}</p>
                    </div>
                    <div className="col-lg-6 mt-3">
                        <p style={{fontSize:"20px"}}><span className='fw-bold'>Phone number:</span> +88{my.phoneNo}</p>
                    </div>
                    <div className="col-lg-6 mt-3">
                        <p style={{fontSize:"20px"}}><span className='fw-bold'>College:</span> {my.college}</p>
                    </div>
                    <div className="col-lg-6 mt-3">
                        <p style={{fontSize:"20px"}}><span className='fw-bold'>Age:</span> {my.age}</p>
                    </div>
                    <div className="col-lg-6 mt-3">
                        <p style={{fontSize:"20px"}}><span className='fw-bold'>Date of birth:</span> {my.dateOfBirth}</p>
                    </div>
                    <div className="col-lg-6 mt-3">
                        <p style={{fontSize:"20px"}}><span className='fw-bold'>Address:</span> {my.address}</p>
                    </div>
                </div>
                {/* edit profile form */}
                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog  modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Profile</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSave}>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text py-2" id="basic-addon1"><FaUser/></span>
                                        <input defaultValue={my.name} name='name' type="text" className="form-control py-2" placeholder="Enter your name" aria-describedby="basic-addon1" required/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text py-2" id="basic-addon1"><FaImages/></span>
                                        <input defaultValue={my.photo} name='photo' type="url" className="form-control py-2" placeholder="Enter your photo" aria-describedby="basic-addon1" required/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text py-2" id="basic-addon1"><BsFillTelephoneFill/></span>
                                        <input name='phone' type="number" className="form-control py-2" placeholder="Enter your phone number" aria-describedby="basic-addon1" required/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text py-2" id="basic-addon1"><FaSchool/></span>
                                        <input name='college' type="text" className="form-control py-2" placeholder="Enter your college name" aria-describedby="basic-addon1" required/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text py-2" id="basic-addon1"><FaCalendar/></span>
                                        <input name='date' type="date" className="form-control py-2"  aria-describedby="basic-addon1" required/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text py-2" id="basic-addon1"><SiNumba/></span>
                                        <input name='age' placeholder="Enter your age" type="number" className="form-control py-2"  aria-describedby="basic-addon1" required/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text py-2" id="basic-addon1"><FaAddressCard/></span>
                                        <input name='address' placeholder="Enter your address" type="text" className="form-control py-2"  aria-describedby="basic-addon1" required/>
                                    </div>

                                    <input type="submit" value={"Save change"}  className="form-control py-3 btn btn-warning w-100" />
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};

export default UserProfile;