import React, {useCallback, useState} from 'react';
import './App.css';
import {Header} from './Header/Header';
import {Main} from './MainPage/Main';
import {Skills} from './SkillsPage/Skills';
import {Projects} from './ProjectsPage/Projects';
import {Contact} from './ContactPage/Contact';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Sidebar} from "./Sidebar/Sidebar";

function App() {
    const [open, setOpen] = useState(false)
    const handleClose = useCallback(() => setOpen(false), [])
    const handleOpen = useCallback(() => setOpen(true), [])
    return (
        <div className='App'>
            <Header handleOpen={handleOpen}/>
            <Sidebar open={open} handleClose={handleClose}/>
            <Routes>
                <Route path='/' element={<Navigate to='/main'/>}/>
                <Route path='/main' element={<Main/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
