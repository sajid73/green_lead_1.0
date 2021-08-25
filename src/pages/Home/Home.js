import React from 'react';
import Mission from '../../components/Home/Mission';
import Newsletter from '../../components/Home/Newsletter';
import Partnership from '../../components/Home/Partnership';
import Vision from '../../components/Home/Vision';
// import Slider from '../../components/Slider/Slider';
import styles from '../../styles/Home.module.css';

const Home = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1 className={`${styles.line_1} ${styles.anim_typewriter} mt-5`} >Leading for a green world</h1>
            {/* <Slider /> */}
            <h1>Slider here</h1>
            <Partnership />
            <Mission />
            <Vision />
            <Newsletter />
        </div>
    );
};

export default Home;