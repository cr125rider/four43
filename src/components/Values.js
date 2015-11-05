import React from 'react';

export default
class Values extends React.Component {

    componentDidMount() {
        var largestHeight = null;
        for (var i = 0; i < 3; i++) {
            var height = React.findDOMNode(this.refs['col-' + i]).offsetHeight;
            if(largestHeight === null || height > largestHeight) {
                largestHeight = height;
            }
        }
        //console.log("largestHeight: " + largestHeight);
        for (i = 0; i < 3; i++) {
            React.findDOMNode(this.refs['col-' + i]).style.minHeight = largestHeight+'px';
        }
    }

    render() {
        return (
            <section id="values" className="container-fluid plain">
                <div className="section-header row">
                    <div className="col-sm-12">
                        <h2>Thoughts</h2><h3>Other values and goals.</h3>
                    </div>
                </div>
                <ul className="row">
                    <li className="col-sm-4" ref="col-0">
                        <div className="content-container">
                            <h3>Real Value</h3>
                            <p>
                                Create software that helps people. Good developers and good software companies create products
                                that have value to real people. Software helps people, keeps them safe, or helps them more efficiently
                                create other products to help other people and I want to be a part of it.
                            </p>
                        </div>
                    </li>
                    <li className="col-sm-4" ref="col-1">
                        <div className="content-container">
                            <h3>Transparency</h3>
                            <p>
                                Be verbose, open, and truthful. Free speech and the world's knowledge at our fingertips
                                are things I don't take lightly living in the US. Everyone deserves transparency from their
                                government, to know full history, and have the ability to openly share thoughts with everyone
                                or only the ones the care about.
                            </p>
                        </div>
                    </li>
                    <li className="col-sm-4" ref="col-2">
                        <div className="content-container">
                            <h3>Defect</h3>
                            <p>
                                Innovation never comes from those that follow norms. People who go against the grain find
                                opportunities for improvement and new solutions.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}