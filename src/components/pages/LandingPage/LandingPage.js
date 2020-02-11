import React from 'react'

import './LandingPage.scss';
import { AlmostFullscreen } from '../../widgets';

const LandingPage = () => {
    return (
        <AlmostFullscreen
            className="landing-page"
            backgroundImage='/assets/images/another-sea.jpeg'
        >
            <div className="landing-page__info-panel">
                <span className="landing-page__main-text">
                    Patrick Murphy
                </span>
                <span className="landing-page__sub-text">
                    Counselling Services
                </span>
            </div>
        </AlmostFullscreen>
    )
}

export default LandingPage;
