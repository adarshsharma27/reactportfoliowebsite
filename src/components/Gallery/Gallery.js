import React from "react";
import data from "./data";
const Gallery = () => {
    return (
        <>
            <section className="container py-4">
                <h2 className=" text-start py-2">Gallery</h2>
                <div className="row align-items-center py-4">
                    {data.map((element) => {
                        return (
                            <div className=" col-lg-4 col-md-4 col-6 pb-4 " key={element.id}>
                                <div className="gallery-card" data-aos="flip-right" data-aos-offset="200" data-aos-delay="50">
                                    <img src={element.image} alt={element.alt} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Gallery;
