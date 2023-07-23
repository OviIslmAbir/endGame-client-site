import React from 'react';
import TopColleges from '../TopColleges/TopColleges';
import Gallery from '../Gallery/Gallery';
import ResearchPaper from '../ResearchPaper/ResearchPaper';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <TopColleges/>
            <Gallery/>
            <ResearchPaper/>
            <Review/>
        </div>
    );
};

export default Home;