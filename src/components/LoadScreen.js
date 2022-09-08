import React from 'react';
import './LoadScreen.css';


const LoadScreen = () => {

    return (
        <div id="home" className="welcome-container">
            <div className="welcome-grid">
                <div className="welcome-message-box">
                    <div className="welcome-message">
                        <h5>ACM-W & Kentucky Community Colleges</h5>
                        <h1 className='welcome-title'>Celebration of Women in Computing</h1>
                        <p className='welcome-info'><strong>March 16th & 17th, 2023</strong></p>
                    </div>
                </div>

                <div>
                    <a href="#theme-heading" className="welcome-scroll-prompt">Scroll Down</a>
                </div>
                

            </div>
        </div>

    );

};

export default LoadScreen;