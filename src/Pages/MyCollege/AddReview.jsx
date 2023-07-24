import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaUser, FaStar, FaCalendar } from 'react-icons/fa';
import { BiSolidMessage } from 'react-icons/bi';
import Swal from 'sweetalert2'
import useTitle from '../../Hook/useTitle';

const AddReview = () => {
    useTitle("Add review")
    const {user} = useContext(AuthContext)

    const handleReview = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const rating = form.rating.value
        const feedback = form.feedback.value
        const date = form.date.value
        
        const addReview = {
            name,
            rating,
            date,
            feedback
        }

        fetch('https://end-game-server-site.vercel.app/review',{
            method: "POST",
            headers: {
                    'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
        .then(res => res.json())
        .then(data => {
             if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Review Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                form.reset()
             }
        })
    }

    return (
        <div className='container mt-3'>
            <h3 className='fw-bold text-center mb-3'>Add Review</h3>
            <form onSubmit={handleReview}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text py-3" id="basic-addon1"><FaUser/></span>
                            <input defaultValue={user?.displayName} name='name' type="text" className="form-control py-3" placeholder="Candidate Name" aria-describedby="basic-addon1" required/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text py-3" id="basic-addon1"><FaStar/></span>
                            <input name='rating' type="number" className="form-control py-3" placeholder="Rating" aria-describedby="basic-addon1" required/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text py-3" id="basic-addon1"><FaCalendar/></span>
                            <input name='date' type="date" className="form-control py-3"  aria-describedby="basic-addon1" required/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text py-3" id="basic-addon1"><BiSolidMessage/></span>
                            <input name='feedback' type="text" className="form-control py-3" placeholder="Write your feedback" aria-describedby="basic-addon1" required/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <input type="submit" value={"submit"}  className="form-control py-3 btn btn-warning w-100" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddReview;