import React from "react";

const Resume = () => {
    return (
        <>
            <div className="cv-section" title="Download my CV">
                <a href="images/adarshsharmacv.pdf" download>
                    <img src="images/cv.png" className="inverted" alt="cv" />
                </a>
            </div>
        </>
    );
};

export default Resume;
