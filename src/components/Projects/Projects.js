import React from "react";
import Gallery from "../Gallery/Gallery";
import data from "./data";
const Projects = () => {
    return (
        <>
            <div className="container-fluid ">
                <section className="container py-4" id="projects">
                    <h2 className=" text-start py-2">My Latest Work</h2>
                    <div className="row">

                    {
                      data.map((element)=>{
                          return(
                            <div className=" col-lg-4 col-md-6 col-sm-12 " key={element.id}>
                            <div className="card" data-aos="flip-right" data-aos-offset="200" data-aos-delay="50">
                                <img className="card-img-top inverted" src={element.image} alt={element.alt} style={{ width: "100%" }} loading="lazy" />
                                <div className="card-body">
                                    <div className="overlay-4">
                                        <a href={element.webUrl} rel="noreferrer" className="btn btn-custom inverted" target="_blank">
                                            View Project
                                        </a>
                                        <a href={element.gitUrl} rel="noreferrer" className="btn btn-custom inverted" target="_blank">
                                            View Code
                                        </a>
                                    </div>
                                    <div className="mobile-btn">
                                        <a href={element.webUrl} rel="noreferrer" className="btn btn-custom inverted" target="_blank">
                                            View Project
                                        </a>
                                        <a href={element.gitUrl} rel="noreferrer" className="btn btn-custom inverted" target="_blank">
                                            View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                          )
                      })
                    }
                        
                    </div>
                </section>
                <Gallery/>
            </div>
        </>
    );
};

export default Projects;
