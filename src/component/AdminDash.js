
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa'; // Importing an icon for the submenu
import './dash.css';

export default function AdminDash() {
  const [isOpen, setIsOpen] = useState({
    course: false,
    events: false,
    jobPosts: false,
    pages: false,
    report: false
  });

  const toggleSubmenu = (menu) => {
    setIsOpen(prevState => ({
      ...prevState,
      [menu]: !prevState[menu]
    }));
  };

  return (
    <>
      <div className="nav1">
        <h1>Institute Management Software</h1>
      </div>
      <div className="dashboard-container">
        <aside className="sidebar">
          <div className="profile">
            <img src="https://via.placeholder.com/100" alt="Profile" className="profile-img" />
            <div className="profile-info">
              <p className="profile-name">Admin</p>
              <p className="profile-email">admin@gmail.com</p>
            </div>
          </div>
          <nav className="nav">
            <ul>
              <Link to="/" ><li><a href="#" className="active">Home</a></li> </Link>
              <li>
                <a href="#" onClick={() => toggleSubmenu('course')}>
                  Courses <FaAngleRight />
                </a>
                {isOpen.course && (
                  <ul className="submenu">
                    <li><a href="#">Submenu Item 1</a></li>
                    <li><a href="#">Submenu Item 2</a></li>
                  </ul>
                )}
              </li>
              <li><a href="#">Events</a></li>
              <Link to="/alumniList"><li><a href="#">Alumni List</a></li></Link>
              <Link to="/createAlumini"><li><a href="#">Create Alumni</a></li></Link>
              <Link to="/viewAlumni"><li><a href="#">View Alumni</a></li></Link>
            </ul>
          </nav>
        </aside>

        <div className="dashboard-content">
          {/* Your content will go here */}
        </div>
      </div>
    </>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa'; // Importing an icon for the submenu
import './dash.css';

export default function AdminDash() {
  const [isOpen, setIsOpen] = useState({
    course: false,
    events: false,
    jobPosts: false,
    pages: false,
    report: false
  });

  const toggleSubmenu = (menu) => {
    setIsOpen(prevState => ({
      ...prevState,
      [menu]: !prevState[menu]
    }));
  };

  return (
    <>
      <div className="nav1">
        <h1>Institute Management Software</h1>
      </div>
      <div className="dashboard-container">
        <aside className="sidebar">
          <div className="profile">
            <img src="https://via.placeholder.com/100" alt="Profile" className="profile-img" />
            <div className="profile-info">
              <p className="profile-name">Admin</p>
              <p className="profile-email">admin@gmail.com</p>
            </div>
          </div>
          <nav className="nav">
            <ul>
              <Link to="/" ><li><a href="#" className="active">Home</a></li> </Link>
              <li>
                <a href="#" onClick={() => toggleSubmenu('course')}>
                  Courses <FaAngleRight />
                </a>
                {isOpen.course && (
                  <ul className="submenu">
                    <li><a href="#">Submenu Item 1</a></li>
                    <li><a href="#">Submenu Item 2</a></li>
                  </ul>
                )}
              </li>
              <li><a href="#">Events</a></li>
              <Link to="/alumniList"><li><a href="#">Alumni List</a></li></Link>
              <Link to="/createAlumini"><li><a href="#">Create Alumni</a></li></Link>
              <Link to="/viewAlumni"><li><a href="#">View Alumni</a></li></Link>
            </ul>
          </nav>
        </aside>

        <div className="dashboard-content">
          {/* Your content will go here */}
        </div>
      </div>
    </>
  );
}

