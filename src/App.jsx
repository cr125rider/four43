import React from 'react';


import About from './components/About';
import Contact from './components/Contact';
import Highlights from './components/Highlights';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Title from './components/Title';
import Updates from './components/Updates';
import Values from './components/Values';
import Work from './components/Work';

export default
class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Nav />
                    <Title />
                </header>
                <About />
                <Highlights />
                <Work />
                <Projects />
                <Values />
                <Contact />
            </div>
        );
    }
}