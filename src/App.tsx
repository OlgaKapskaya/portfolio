import React from 'react';

import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./MainPage/Main";
import {Skills} from "./SkillsPage/Skills";
import {Projects} from "./ProjectsPage/Projects";
import {Contact} from "./ContactPage/Contact";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
