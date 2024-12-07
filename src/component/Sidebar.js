// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Government Polytechnic Awasari</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/AluminiList">AluminiList</Link></li>
                

            </ul>
        </div>
    );
}

export default Sidebar;