import React, { useEffect, useState } from 'react';

const ResearchPaper = () => {
    const [research, setResearch] = useState([])
    useEffect(() => {
        fetch('https://end-game-server-site.vercel.app/research')
        .then(res => res.json())
        .then(data => setResearch(data))
    },[])
    return (
        <div className='container'>
            <h3 className='text-center fw-bold mb-4'>Research Paper</h3>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4 mb-3">
                {
                    research.map(r => 
                        <div key={r._id} className="col">
                            <div style={{border:"none", backgroundColor:"whitesmoke"}} className="card h-100 shadow-lg">
                                <div className="card-body">
                                    <h4 className="card-title fw-bold mb-3">{r.college_name}</h4>
                                    <p className="card-text"><small><span className='fw-bold'>Research name:</span> {r.title}</small></p>
                                    <p className="card-text"><small><span className='fw-bold'>Research paper:</span> <a href="">{r.url}</a></small></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ResearchPaper;