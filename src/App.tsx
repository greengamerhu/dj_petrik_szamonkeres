import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import CustomFooter from './components/CustomFooter';
import Navbar from './components/NavBar';
import Fooldal from './components/FoOldal';
import Tapasztalat from './components/tapasztalat';
import IdopontFoglalas from './components/IdopontFoglalas';


class App extends Component {
    render(): React.ReactNode {
        return <div>
                <Navbar/>
                <Routes>
          <Route path='/'  element={<Fooldal/>} />
          <Route path='tapasztalat' element={<Tapasztalat/>}  />
          <Route path='idopont' element={<IdopontFoglalas/>}  />
        </Routes>
        <CustomFooter/>
        </div>
    }
}

export default App;
