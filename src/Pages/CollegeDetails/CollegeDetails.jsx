import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const college = useLoaderData()
    return (
        <div className='container mt-5'>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <img src={college.college_image} className='img-fluid' style={{height:"480px", borderRadius:"10px"}} alt="" />
                </div>
                <div className="col-lg-6">
                    <h2 className='fw-bold'>{college.college_name}</h2>
                    <p className='mt-3'><span className='fw-bold'>Admission date:</span> {college.admission_dates}</p>
                    <p><span className='fw-bold'>Current research:</span> {college.research_history}</p>
                    <p><span className='fw-bold'>Total research:</span> {college.number_of_research}</p>
                    <p><span className='fw-bold'>Sports:</span> {college.sports}</p>
                    <p><span className='fw-bold'>Rating:</span> {college.rating}</p>
                    <hr />
                    <h4 className='fw-bold'>Events</h4>
                    <div className='d-flex justify-content-between gap-3'>
                        {
                            college.events.map(event => 
                            <div>
                                <h5>{event.event_name}</h5>
                                <small><span className='fw-bold'>Date:</span> {event.event_date}</small>
                                <p><small>{event.event_description}</small></p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;