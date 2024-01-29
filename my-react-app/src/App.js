
import './App.css';
import Home from './Component/Home';

import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Roadsafety from './Component/Roadsafety';
import Oldagesafety from './Component/oldagesafety';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chidsafety from './Component/Chidsafety';
import Pedestrainsafety from './Component/Pedestrainsafety';
import Schoolbus from './Component/schoolbus';
import Vehicle from './Component/Vehicle';
import Teen from './Component/Teen';
import Complaint from './Component/Complaint';


function App() {
  return (
  <>
    <Navbar/>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/roadsafety" element={<Roadsafety/>}></Route>
        <Route path="/child-safety" element={<Chidsafety/>}></Route>
        <Route path="/oldage-safety" element={<Oldagesafety/>}></Route>
        <Route path='/pedestrain-safety'element={<Pedestrainsafety/>}></Route>
        <Route path='/schoolbus-safety'element={<Schoolbus/>}></Route>
        <Route path="/vehicle-safety"element={<Vehicle/>}></Route>
        <Route path='/teen-safety'element={<Teen/>}></Route>
        <Route path='/complaint'element={<Complaint/>}></Route>
      </Routes>
     </Router>
    <Footer/>
  </>
   

  );
}

export default App;
