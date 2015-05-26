import React from 'react';
import Title from './components/Title';
import About from './components/About';
import Projects from './components/Projects';
import Values from './components/Values';
import Updates from './components/Updates';
import Work from './components/Work';

export default
class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Title />
                </header>
                <div className="index row">
                    <div className="col-sm-offset-3 col-sm-7">
                        <About />
                        <Work />
                        <Projects />
                        <Values />
                        <Updates />
                    </div>
                </div>
            </div>
        );
    }
}