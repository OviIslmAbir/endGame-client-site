import React from 'react';
import TopColleges from '../TopColleges/TopColleges';
import Gallery from '../Gallery/Gallery';
import ResearchPaper from '../ResearchPaper/ResearchPaper';
import Review from '../Review/Review';
import useTitle from '../../../Hook/useTitle';

const Home = () => {
    useTitle('Home')
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