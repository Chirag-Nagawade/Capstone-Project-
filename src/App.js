import React from 'react';
import { Routes ,Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AlumniList from './pages/AlumniList';
import CreateAlumini from './pages/CreateAlumini';
import ViewAlumni from './pages/ViewAlumni';

function App() {
  return (
    <>
      <BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/alumniList" element={<AlumniList/>}/>
<Route path="/createAlumini" element={<CreateAlumini/>}/>
<Route path="/viewAlumni" element={<ViewAlumni/>}/>
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
