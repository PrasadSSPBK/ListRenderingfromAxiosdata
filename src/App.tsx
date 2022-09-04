import React from 'react';
import './App.css';
import ListRendering from './components/ListRendering';
// import Home from './components/Home ';
import About from './components/About';
import Navbar from './components/Navbar';
import { Routes ,Route} from 'react-router-dom';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <React.Fragment>
        <Navbar/>
       <Routes>
        {/* <Route path={"/"} element={<Home/>}/> */}
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/Userlist"} element={<ListRendering/>}/>
        <Route path={"/Userlist/:id"} element={<UserDetails />}/>
       </Routes>
    </React.Fragment>
  );
}

export default App;
