import React, { useEffect, useState } from "react";
const Resume = () => {
    const [visibleSrollTop, setVisibleScrollTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                setVisibleScrollTop(true);
            } else {
                setVisibleScrollTop(false);
            }
        });
    }, []);
    return (
        <>
            {visibleSrollTop && (
                <div className="cv-section" title="Download my CV">
                    <a href="images/adarshsharmacv.pdf" download>
                        <img src="images/cv.png" className="inverted" alt="cv" />
                    </a>
                </div>
            )}
        </>
    );
};

export default Resume;
