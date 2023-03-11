import React from "react";
import ProfileImage from "./ProfileImage";

const Header = () => {
  return (
    <>
      <section>
        <div className="container h-100 w-100 py-4 mx-auto overflow-hidden">
          <div className="row h-100 m-0 p-0 my-1 w-100  align-items-center">
            <div
              className="col-md-6 order-md-1 order-2 text-md-start  py-4 "
              data-aos="fade-right"
              data-aos-delay="20"
              data-aos-duration="1250"
            >
              <h4 className="font-weight-light">
                <b>Frontendadarsh for you 👋 </b>
              </h4>
              <div className="description pb-2">
                <span
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: "600",
                    color: "#32B768",
                  }}
                >
                  {"{"}
                </span>
                <p className="py-2">
              <b>Namaste</b> !! My name is Adarsh Sharma and I'm a passionate front-end developer with two years of experience in frontend tools and technologies. I also enjoy sharing my knowledge on technical blogs and social media platforms. I have over 100 posts on GitHub, LinkedIn, and Dribble.
                </p>
                <div className="py-2 ">
                  <div className="row">
                    <div className="col-md-2 col-3">
                      <a href="https://github.com/adarshsharma27/">
                        <i
                          className="fab fa-github-square fa-2x inverted"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div className="col-md-2 col-3">
                      <a href="https://www.linkedin.com/in/adarsh-sharma-b025b5178/">
                        <i
                          className="fab fa-linkedin fa-2x inverted"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div className="col-md-2 col-3">
                      <a href="https://dribbble.com/Frontadarsh/shots">
                        {" "}
                        <i
                          className="fab fa-dribbble-square fa-2x inverted"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div className="col-md-2 col-3">
                      <a href="https://www.instagram.com/frontendadarsh/?hl=en">
                        <i
                          className="fab fa-instagram fa-2x inverted"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: "600",
                    color: "#32B768",
                  }}
                >
                  {"}"}
                </span>
              </div>
              <div className="connect-with-me">
              <a href="#contactus">
                <button className=" btn btn-custom inverted">
                  Connect With Me
                </button>
              </a>
              </div>
              
            </div>
            <div
              className="col-md-6 order-md-2 order-1 text-center p-0"
              data-aos="fade-left"
              data-aos-delay="20"
              data-aos-duration="1250"
            >
              <ProfileImage />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
