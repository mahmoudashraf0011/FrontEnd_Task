
import './App.css';
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Profle from './Components/Profile'
import Navbar from './Components/Navbar'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Profile from './Components/Profile';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer';
import Cookies from 'universal-cookie';
import ProtectedRouter from './Components/ProtectedRouter';
import baseURL from './Components/API/BaseURL';

function App() {
  const cookie=new Cookies();


  return (
    <div className="App">

      <HashRouter>
       <Navbar />
      <Routes>
          <Route path='/' element={ <Login />}/>
          <Route path='/auth/register' element={ <Register />}/>
          < Route  path='/profile' element={
            <ProtectedRouter>
              <Profile />
            </ProtectedRouter>
          }/>
  
        </Routes>
      </HashRouter>
      <Footer />

    </div>
  );
}

export default App;
