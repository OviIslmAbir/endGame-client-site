import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Admission = () => {
    const admission = useLoaderData()
    return (
    <div className='container mt-4'>
        <h3 className='text-center fw-bold mb-4'>Admission</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-3">
            {
                admission.map(a => 
                    <div key={a._id} className="col">
                        <div style={{border:"none", backgroundColor:"whitesmoke"}} className="card h-100 shadow-lg">
                            <div className="card-body text-center">
                                <h5 style={{fontSize:"23px"}} className="card-title fw-bold mb-3">{a.college_name}</h5>
                                <div>
                                  <Link to={`/admission/${a._id}`} className='btn btn-warning'>Admission Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
    );
};

export default Admission;