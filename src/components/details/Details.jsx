import './Details.css';

import React, { useState } from 'react';

function JobDetail() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [coverLetter, setCoverLetter] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic for form submission
    };

    return (
        <div className="container-xxl bg-white p-0">
            {/* Spinner Start */}
            <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            {/* Spinner End */}

            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a href="index.html" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                    <h1 className="m-0 text-primary">JobEntry</h1>
                </a>
                {/* Navbar Toggler Button */}
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    {/* Navbar Nav Links */}
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="index.html" className="nav-item nav-link">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        {/* Jobs Dropdown */}
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Jobs</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a href="job-list.html" className="dropdown-item">Job List</a>
                                <a href="job-detail.html" className="dropdown-item active">Job Detail</a>
                            </div>
                        </div>
                        {/* Pages Dropdown */}
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a href="category.html" className="dropdown-item">Job Category</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    {/* Post a Job Button */}
                    <a href="" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Post A Job<i className="fa fa-arrow-right ms-3"></i></a>
                </div>
            </nav>
            {/* Navbar End */}

            {/* Header Start */}
            <div className="container-xxl py-5 bg-dark page-header mb-5">
                <div className="container my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Job Detail</h1>
                    {/* Breadcrumbs */}
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Job Detail</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Header End */}

            {/* Job Detail Start */}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row gy-5 gx-4">
                        {/* Left Column */}
                        <div className="col-lg-8">
                            <div className="d-flex align-items-center mb-5">
                                {/* Company Logo */}
                                <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-2.jpg" alt="" style={{ width: '80px', height: '80px' }} />
                                {/* Job Details */}
                                <div className="text-start ps-4">
                                    <h3 className="mb-3">Marketing Manager</h3>
                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                    <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                </div>
                            </div>
                            {/* Job Description */}
                            <div className="mb-5">
                                <h4 className="mb-3">Job description</h4>
                                <p>Dolor justo tempor duo ipsum accusam rebum gubergren erat...</p>
                                {/* Responsibilities */}
                                <h4 className="mb-3">Responsibility</h4>
                                <p>Magna et elitr diam sed lorem. Diam diam stet erat no est est...</p>
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-angle-right text-primary me-2"></i>Dolor justo tempor duo ipsum accusam</li>
                                    <li><i className="fa fa-angle-right text-primary me-2"></i>Elitr stet dolor vero clita labore gubergren</li>
                                    {/* Other responsibilities */}
                                </ul>
                                {/* Qualifications */}
                                <h4 className="mb-3">Qualifications</h4>
                                <p>Magna et elitr diam sed lorem. Diam diam stet erat no est est...</p>
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-angle-right text-primary me-2"></i>Dolor justo tempor duo ipsum accusam</li>
                                    {/* Other qualifications */}
                                </ul>
                            </div>
                            {/* Apply Form */}
                            <div className="">
                                <h4 className="mb-4">Apply For The Job</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                        {/* Other form fields */}
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100" type="submit">Apply Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* Right Column */}
                        <div className="col-lg-4">
                            {/* Job Summary */}
                            <div className="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
                                <h4 className="mb-4">Job Summery</h4>
                                <p><i className="fa fa-angle-right text-primary me-2"></i>Published On: 01 Jan, 2045</p>
                                {/* Other job details */}
                            </div>
                            {/* Company Detail */}
                            <div className="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
                                <h4 className="mb-4">Company Detail</h4>
                                <p className="m-0">Ipsum dolor ipsum accusam stet et et diam dolores, sed rebum sadipscing elitr vero dolores...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Job Detail End */}

            {/* Footer Start */}
            <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                {/* Footer Content */}
            </div>
            {/* Footer End */}

            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    );
}

export default JobDetail;
