import React from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
const ContactUs = () => {
    const phoneRegExp = /^[0-9]*$/;
    const textRegExp = /^[A-Za-z]+$/;
    let schemaFormValidation = yup.object().shape({
        name: yup.string().required("Enter Name").matches(textRegExp, "Enter Name").max(20),
        email: yup.string().required("Enter Email").email(),
        mobile: yup.string().required("Enter Mobile Number").matches(phoneRegExp, "Enter Mobile Number").min(10).max(10),
        message: yup.string().required("Enter Message").max(200),
    });
    const sendEmail = (values) => {
        emailjs.send("service_m82f4e4", "template_6fauenu", values, "user_f6gXGT6VCtJRanQ6uBJA5").then(
            () => {
                console.log(values);
                toast.success("Successfully Submitted Thank You!!...", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            },
            () => {
                toast.error("Something Went Wrong", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        );
        //   e.target.reset();
    };
    return (
        <>
            <section>
                <div className="container h-100 w-100 py-4 mx-auto" id="contactus">
                    <h2 className=" text-start py-2">Get In Touch</h2>
                    <div className="row ">
                        <div className="col-md-5 col-sm-12 d-flex justify-content-center align-items-center" data-aos="zoom-in-down" data-aos-delay="30" data-aos-duration="1000">
                            <img src="images/contact.svg" className="img-fluid" alt="contact us" />
                        </div>
                        <div className="col-md-6 col-md-6  col-sm-12 mx-auto py-5" data-aos="zoom-in-up" data-aos-delay="30" data-aos-duration="1000">
                            <Formik
                                initialValues={{ name: "", email: "", mobile: "", message: "" }}
                                validationSchema={schemaFormValidation}
                                onSubmit={(values, { resetForm }) => {
                                    sendEmail(values);
                                    resetForm();
                                }}
                            >
                                <Form className="form">
                                    <div className="mb-3">
                                        <Field type="text" className="form-control" placeholder="Name" name="name" />
                                        <p className="text-red-500">
                                            <ErrorMessage name="name" />
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <Field type="email" className="form-control" placeholder="Email" name="email" />
                                        <p className="text-red-500">
                                            <ErrorMessage name="email" />
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <Field type="tel" className="form-control" placeholder="Mobile No." name="mobile" />
                                        <p className="text-red-500">
                                            <ErrorMessage name="mobile" />
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <Field className="form-control" rows="3" placeholder="Message" name="message" />
                                        <p className="text-red-500">
                                            <ErrorMessage name="message" />
                                        </p>
                                    </div>
                                    <div className="text-md-start text-center">
                                        <button type="submit" className="btn btn-custom inverted">
                                            Send
                                        </button>
                                    </div>
                                </Form>
                            </Formik>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
