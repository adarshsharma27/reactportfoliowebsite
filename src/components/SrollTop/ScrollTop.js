import React, { useEffect, useState } from "react";
const ScrollTop = () => {
    const [visibleSrollTop, setVisibleScrollTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setVisibleScrollTop(true);
            } else {
                setVisibleScrollTop(false);
            }
        });
    }, []);
    const scrollTopBtn = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            {visibleSrollTop && (
                <div className="scroll-button inverted" onClick={scrollTopBtn}>
                    <i className="fas fa-angle-up " aria-hidden="true"></i>
                </div>
            )}
        </>
    );
};

export default ScrollTop;
