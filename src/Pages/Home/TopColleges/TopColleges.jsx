import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi';
const TopColleges = () => {
    const [colleges, setColleges] = useState([])
    const searchRef = useRef(null)
    const [search, setSearch] = useState('')
    useEffect(() => {
        fetch(`https://end-game-server-site.vercel.app/colleges?search=${search}`)
        .then(res => res.json())
        .then(data => setColleges(data.slice(0,3)))
    },[search])
    const handleSearch = () => {
        setSearch(searchRef.current.value)
    }
    return (
        <div className='container my-4'>
            <div>
                <div className="input-group mb-3 w-50 mx-auto">
                    <span className="input-group-text py-3" id="basic-addon1"><BiSearch style={{fontSize:"23px"}}/></span>
                    <input onKeyUp={handleSearch} type="text" ref={searchRef} className="form-control py-3" placeholder="Search College" aria-describedby="basic-addon1"/>
                </div>
            </div>
            <h3 className='text-center fw-bold mb-4'>Top Colleges</h3>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-3">
                {
                    colleges.map(college => 
                        <div key={college._id} className="col">
                            <div className="card h-100">
                                <img src={college.college_image} style={{height:"200px"}} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-title fw-bold mb-3">{college.college_name}</h4>
                                    <p className="card-text"><small><span className='fw-bold'>Admission date:</span> {college.admission_dates}</small></p>
                                    <p className="card-text"><small><span className='fw-bold'>Research history:</span> {college.research_history}</small></p>
                                    <p className="card-text"><small><span className='fw-bold'>Sports:</span> {college.sports}</small></p>
                                    <div className=''>
                                        <Link to={`/college/${college._id}`} className='btn btn-warning w-100'>View Details</Link>
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

export default TopColleges;