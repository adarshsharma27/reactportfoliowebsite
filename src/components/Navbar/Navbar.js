import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link} from 'react-scroll'



const Navbar = () => {
  
  return (
    <>
<header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink to="/" className="navbar-brand" ><h1 style={{color:'#32B768'}}>{ "Adarsh_Sharma_" }</h1></NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <NavLink  to="/">
          <li className="nav-item">
                <span className="nav-link active" >
                Home
                </span>
              </li>
          </NavLink>
          
<li className="nav-item" >
                  <Link className="nav-link" to="service" smooth={true}  >Services</Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link" to="projects" smooth={true} >Work</Link>
              </li>
                <li className="nav-item">
                <Link className="nav-link" to="contactus" smooth={true}>Contact Us</Link>
              </li>
          <NavLink to="/projects">
              <li className="nav-item">
                <span className="nav-link" >
                Projects
                </span>
              </li>
                </NavLink>
             
             
            </ul>
           
          </div>
        </div>
      </nav>

</header>

    </>
  )
}

export default Navbar