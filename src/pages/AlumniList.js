 HEAD
import AdminDash from '../component/AdminDash';
import React from 'react';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; // Importing the required icons
import './AlCrForm.css';

export default function AlumniList() {
  const alumniData = [
    {
      sno: 1,
      img: "a23.png",
      name: "Raksh",
      gender: "male",
      collegeId: 2226765,
      batch: "2010-2014",
      dept: "IF"
    },
    {
        sno: 2,
        img: "a23.png",
        name: "John Doe",
        gender: "male",
        collegeId: 2345678,
        batch: "2015-2019",
        dept: "AE"
       
      },{
        sno: 3,
        img: "a23.png",
        name: " Doe",
        gender: "male",
        collegeId: 23435678,
        batch: "2015-2019",
        dept: "CO"
      },
    // Add more alumni data as needed
  ];

  return (
    <>
    <AdminDash/>
      <div className="container">
        <h1>Manage Alumni List</h1>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Profile</th>
              <th>Full Name</th>
              <th>gender</th>
              <th>College ID</th>
              <th>Batch</th>
             
              <th>dept</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alumniData.map((alumnus) => (
              <tr key={alumnus.sno}>
                <td>{alumnus.sno}</td>
                <td>{alumnus.profile}</td>
                <td>{alumnus.name}</td>
                <td>{alumnus.gender}</td>
                <td>{alumnus.collegeId}</td>
                <td>{alumnus.batch}</td>
                <td>{alumnus.dept}</td>
                <td>
                  <button className="icon-btn edit-btn">
                    <FaEdit /> {/* Edit Icon */}
                  </button>
                  <button className="icon-btn delete-btn">
                    <FaTrashAlt /> {/* Delete Icon */}
                  </button>
                  <button className="icon-btn view-btn">
                    <FaEye /> {/* View Icon */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

import AdminDash from '../component/AdminDash';
import React from 'react';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; // Importing the required icons
import './AlCrForm.css';

export default function AlumniList() {
  const alumniData = [
    {
      sno: 1,
      img: "a23.png",
      name: "Raksh",
      gender: "male",
      collegeId: 2226765,
      batch: "2010-2014",
      dept: "IF"
    },
    {
        sno: 2,
        img: "a23.png",
        name: "John Doe",
        gender: "male",
        collegeId: 2345678,
        batch: "2015-2019",
        dept: "AE"
       
      },{
        sno: 3,
        img: "a23.png",
        name: " Doe",
        gender: "male",
        collegeId: 23435678,
        batch: "2015-2019",
        dept: "CO"
      },
    // Add more alumni data as needed
  ];

  return (
    <>
    <AdminDash/>
      <div className="container">
        <h1>Manage Alumni List</h1>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Profile</th>
              <th>Full Name</th>
              <th>gender</th>
              <th>College ID</th>
              <th>Batch</th>
             
              <th>dept</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alumniData.map((alumnus) => (
              <tr key={alumnus.sno}>
                <td>{alumnus.sno}</td>
                <td>{alumnus.profile}</td>
                <td>{alumnus.name}</td>
                <td>{alumnus.gender}</td>
                <td>{alumnus.collegeId}</td>
                <td>{alumnus.batch}</td>
                <td>{alumnus.dept}</td>
                <td>
                  <button className="icon-btn edit-btn">
                    <FaEdit /> {/* Edit Icon */}
                  </button>
                  <button className="icon-btn delete-btn">
                    <FaTrashAlt /> {/* Delete Icon */}
                  </button>
                  <button className="icon-btn view-btn">
                    <FaEye /> {/* View Icon */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
