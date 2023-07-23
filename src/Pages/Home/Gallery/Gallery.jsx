import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [gallery, setGallery] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/gallery')
        .then(res => res.json())
        .then(data => setGallery(data))
    }, [])
    return (
        <div className='container my-5'>
            <h3 className='fw-bold mb-3 text-center'>Graduation Gallery</h3>
            <div className="row">
                {
                    gallery.map(g => 
                        <div className='col-lg-4'>
                            <img src={g.img}  alt=""style={{height:"200px",width:"500px"}} className='img-fluid img-thumbnail mt-3 p-2' />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Gallery;