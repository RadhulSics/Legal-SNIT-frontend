import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../../Assets/logo2.png';

function AdvocateNavbar() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('advocateId') == null) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {                
    localStorage.clear();
    window.location.reload()
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark landing_custom_navbar">
        <div className="container">
          <Link className="navbar-brand" to="#home">
            <img
              alt="Logo"
              src={img1}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            LEGAL LIAISON
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/advocate_home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#about-us">Cases</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#services">Chat</Link>
              </li>
             
             
              <li className="nav-item">
                <Link className="nav-link" to="#contact">Resource Request</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={handleLogout}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AdvocateNavbar;
