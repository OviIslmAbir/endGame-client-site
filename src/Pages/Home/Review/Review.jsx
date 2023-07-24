import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';


import "swiper/css";
import "swiper/css/pagination";

const Review = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('https://end-game-server-site.vercel.app/review')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div className='container mt-5'>
            <h3 className='text-center fw-bold mb-4'>What our client says</h3>
            <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper p-4"
                >
                    {
                        review.map(r =>
                            <SwiperSlide  key={r.id}>
                                <div className="text-center">
                                    <h4 className='fw-bold'>{r.name}</h4>
                                    <p className="text-left"><small>{r.feedback}</small></p>
                                    <div className='d-lg-flex d-none align-items-center justify-content-center gap-4'>
                                        <p><small><span className='fw-bold'>Rating: </span> {r.rating}</small></p>
                                        <p><small><span className='fw-bold'>Date:</span> {r.date}</small></p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            )
                    }
            </Swiper>
        </div>
    );
};

export default Review;