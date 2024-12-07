import React from 'react';
import './AlCrForm.css'
import AdminDash from '../component/AdminDash';

export default function ViewAlumni() {
  return (
    <>
    <AdminDash/>
    <div className="employee-details-container">
      <div className="employee-details">
        <img src="../logo512.png" alt="Profile of Yousaf" className="profile-photo" />
        <h2>Employee Details</h2>
        <ul className="employee-list">
          <li><strong>Name:</strong> Yousaf</li>
          <li><strong>Gender:</strong> Male</li>
          <li><strong>Batch:</strong> Batch</li>
          <li><strong>Collge Id:</strong> Enr</li>
          <li><strong>Department:</strong> course</li>
          <li><strong>Current Company:</strong> name</li>
          <li><strong>Company Address:</strong> address</li>
        </ul>
      </div>
    </div>
    </>
  );
}
