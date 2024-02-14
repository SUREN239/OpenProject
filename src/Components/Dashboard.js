import React from 'react';
import '../Assets/CSS/Dashboard.css';
import { Link } from 'react-router-dom';
import { UserCog, SearchX, Notebook, NotepadText, GraduationCap, Phone } from 'lucide-react';

const Dashboard = () => {

  return (
    <>
    <div>
      <ul className="nav-mobile">
      <li>EDUCOMP</li>
      <li className="menu-container">
        <input id="menu-toggle" type="checkbox" />
        <label htmlFor="menu-toggle" className="menu-button">
          <svg className="icon-open" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
          <svg className="icon-close" viewBox="0 0 100 100">
            <path d="M83.288 88.13c-2.114 2.112-5.575 2.112-7.69 0L53.66 66.188c-2.113-2.112-5.572-2.112-7.686 0l-21.72 21.72c-2.114 2.113-5.572 2.113-7.687 0l-4.693-4.692c-2.114-2.114-2.114-5.573 0-7.688l21.72-21.72c2.112-2.115 2.112-5.574 0-7.687L11.87 24.4c-2.114-2.113-2.114-5.57 0-7.686l4.842-4.842c2.113-2.114 5.57-2.114 7.686 0l21.72 21.72c2.114 2.113 5.572 2.113 7.688 0l21.72-21.72c2.115-2.114 5.574-2.114 7.688 0l4.695 4.695c2.112 2.113 2.112 5.57-.002 7.686l-21.72 21.72c-2.112 2.114-2.112 5.573 0 7.686L88.13 75.6c2.112 2.11 2.112 5.572 0 7.687l-4.842 4.84z" />
          </svg>
        </label>
        <ul className="menu-sidebar">
          <li className='student-profile'><UserCog/>STUDENT</li>
          <li><Link to="#"><Notebook/>COURSE</Link></li>
          <li><Link to="#"><NotepadText/>ASSIGNMENT</Link></li>
          <li><Link to="#"><GraduationCap/>TEACHERS</Link></li>
          <li>
            <input type="checkbox" id="sub-one" className="submenu-toggle" />
            <label className="submenu-label" htmlFor="sub-one"><SearchX/>ABOUT</label>
            <div className="arrow right">&#8250;</div>
            <ul className="menu-sub">
              <li className="menu-sub-title">
                <label className="submenu-label" htmlFor="sub-one">Back</label>
                <div className="arrow left">&#8249;</div>
              </li>
              <li><Link to="#">Course</Link></li>
              <li><Link to="#">Development</Link></li>
              <li><Link to="#">Integrations</Link></li>
              <li><Link to="#">Outcomes</Link></li>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="sub-two" className="submenu-toggle" />
            <label className="submenu-label" htmlFor="sub-two"><Phone/>CONTACT US</label>
            <div className="arrow right">&#8250;</div>
            <ul className="menu-sub">
              <li className="menu-sub-title">
                <label className="submenu-label" htmlFor="sub-two">Back</label>
                <div className="arrow left">&#8249;</div>
              </li>
              <li><Link to="#">Course</Link></li>
              <li><Link to="#">Development</Link></li>
              <li><Link to="#">Integrations</Link></li>
              <li><Link to="#">Outcomes</Link></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    </div>

  <div className='Quick-picks'>
    <h2>Quick Picks</h2>
  </div>
{/* Background Cards */}
<div className="cards-3 section-gray">
            <div className="container" >
                <div className="row">
                    <div className="col-md-6">
                        <div className="card card-background">
                            <div className="table">
                                <h6 className="category text-info" >Development & Designs</h6>
                                    <h3 className="card-caption">Empowering Growth Through Innovative Development</h3>
                                <p className="card-description">Embark on a journey of innovation and growth with our development solutions. From concept to reality, we craft digital experiences that transform ideas into powerful solutions. Our team of skilled developers is dedicated to bringing your vision to life, ensuring seamless functionality and user-centric design.
                                 Elevate your projects with cutting-edge technology and reliable development expertise.</p>
                                <Link to="#" className="btn btn-danger btn-round"> <i className="fa fa-align-left"></i> About </Link>
                                <Link to="#pablo" className="btn btn-success btn-round"> <i className="fa fa-cogs"></i> Start Course
                                    <div className="ripple-container"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card card-background">
                            <div className="table">
                                <h6 className="category text-info">Business</h6>
                              <h3 className="card-caption">Driving Success, Powering Progress: Your Business, Our Expertise</h3>
                                <p className="card-description">Navigate the complexities of the business world with confidence. Our business solutions are designed to empower enterprises, providing strategic insights, operational efficiency, and scalable solutions. Whether you're a startup or an established company,
                                 our tailored approaches foster growth.</p>
                                <Link to="#" className="btn btn-danger btn-round"> <i className="fa fa-align-left"></i> About </Link>
                                <Link to="#pablo" className="btn btn-success btn-round"> <i className="fa fa-cogs"></i> Start Course
                                    <div className="ripple-container"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  {/* // card */}
  <div className='Top-Courses'>
    <h2>Top-Courses</h2>
  </div>
  <div className="container card-wrapper">
      <div className="row grid-container">

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100" style={{ width: '18rem' }}>
            <img src="https://www.kdnuggets.com/wp-content/uploads/math-chalkboard-header-scaled.jpg" className="card-img-top" alt="..." height="200px"/>
            <div className="card-body">
              <h5 className="card-title">Mathematics</h5>
              <p className="card-text"> From algebra to calculus, explore the elegance of mathematical concepts and their profound applications, fostering a deep understanding. </p>
              <Link to="#" className="btn btn-primary">Goto Course</Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100" style={{ width: '18rem' }}>
            <img src="https://www.corporatevision-news.com/wp-content/uploads/2022/04/Software-Development.jpg" className="card-img-top" alt="..."  height="200px"/>
            <div className="card-body">
              <h5 className="card-title">Software Development</h5>
              <p className="card-text">Dive into programming languages, frameworks, and methodologies that empower you to build applications, websites, and systems that drive progress. </p>
              <Link to="#" className="btn btn-primary">Goto Course</Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100" style={{ width: '18rem' }}>
            <img src="https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg" className="card-img-top" alt="..."  height="200px"/>
            <div className="card-body">
              <h5 className="card-title">Science</h5>
              <p className="card-text">Embracing the scientific method, practitioners engage in a continuous pursuit of discovery, expanding the boundaries of human knowledge .</p>
              <Link to="#" className="btn btn-primary">Goto Course</Link>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div className='but-class'>   <Link to="#" ><button className='new-button'> View All </button></Link> </div>
 
  </>
    )
};

export default Dashboard;