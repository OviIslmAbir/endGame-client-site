import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyCollege = () => {
    const {user} = useContext(AuthContext)
    const [myColleges, setMyColleges] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/admissionDetails?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyColleges(data))
    }, [])
    return (
        <div className='container mt-3'>
            {/* <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table> */}
            <h1 className='text-center fw-bold mb-3'>My College</h1>
            <h4 className='text-center mb-4'>Admission Information</h4>
            {
                myColleges.map(myCollege => 
                <div key={myCollege._id} className='shadow-lg px-5 py-3'>
                    <h5 className='fw-bold'>{myCollege.collegeName}</h5>
                    <p style={{fontSize:"14px"}}><small>{myCollege.collegeDetails}</small></p>
                    <hr />
                    <h5 className='fw-bold'>My Information</h5>
                    <div className='d-flex align-items-center gap-2 '>
                       <img style={{width:"50px", height:"50px", borderRadius:"50%"}} src={myCollege.photo} alt="" />
                       <h5 className='fw-bold'>{myCollege.name}</h5>
                    </div>
                    <div className="row mt-2">
                        <div className="col-lg-4">
                           <p><span className='fw-bold'>Email:</span> {myCollege.email}</p>
                        </div>
                        <div className="col-lg-4">
                           <p><span className='fw-bold'>Date of birth:</span> {myCollege.dateOfBirth}</p>
                        </div>
                        <div className="col-lg-4">
                           <p><span className='fw-bold'>Phone:</span> +88{myCollege.phoneNo}</p>
                        </div>
                        <div className="col-lg-4">
                           <p><span className='fw-bold'>Address:</span> {myCollege.address}</p>
                        </div>
                        <div className="col-lg-4">
                           <p><span className='fw-bold'>Subjects:</span> {myCollege.subject}</p>
                        </div>
                        <div className="col-lg-12">
                           <Link to='/addReview' className='btn btn-warning w-100'>Add Review</Link>
                        </div>
                    </div>
                </div>
                )
            }
            
        </div>
    );
};

export default MyCollege;