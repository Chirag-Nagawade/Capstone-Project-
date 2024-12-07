import React, { useState } from 'react';
import './AlCrForm.css';
import AdminDash from '../component/AdminDash';
export default function CreateAlumini() {
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);
  const [gen, setGen] = useState("");
  const [cid, setCid] = useState("");
  const [course, setCourse] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const [batch, setBatch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      img,
      gen,
      cid,
      course,
      address,
      company,
      batch,
    };
    console.log(formData); // For debugging, you can send this data to an API or perform other actions.
  };

  return (
    <><AdminDash/>
    <div className="container">
      <h1>Add Alumini Form</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          required
        />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={gen}
          onChange={(e) => setGen(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="batch">Batch:</label>
        <input
          type="text"
          id="batch"
          name="batch"
          onChange={(e) => setBatch(e.target.value)}
          placeholder="Enter your Batch"
          required
        />

        <label htmlFor="collegeid">College ID:</label>
        <input
          type="text"
          id="collegeid"
          name="collegeid"
          onChange={(e) => setCid(e.target.value)}
          placeholder="Enter your college ID number"
          required
        />

        <label htmlFor="graduated">Course:</label>
        <select
          id="graduated"
          name="graduated"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        >
          <option value="">Select Course</option>
          <option value="IF">Information Technology</option>
          <option value="CO">Computer</option>
          <option value="AE">Automobile</option>
          <option value="B.Tech">B.Tech</option>
          <option value="ME">Mechanical</option>
          <option value="EE">Electrical</option>
          <option value="CE">Civil</option>
          <option value="EnTC">Electronics & Telecommunication</option>
        </select>

        <label htmlFor="pic">Profile Picture:</label>
        <input
          type="file"
          id="pic"
          name="pic"
          onChange={(e) => setImg(e.target.files[0])}
          required
        />

        <label htmlFor="connectedto">Currently Connected To:</label>
        <input
          type="text"
          id="connectedto"
          name="connectedto"
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Enter your company name"
          required
        />

        <label htmlFor="address">Address of Company:</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your company address"
          required
        />

        <button type="submit">Create</button>
      </form>
    </div></>
  );
}
