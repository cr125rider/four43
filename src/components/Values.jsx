import React from 'react';

export default
class Values extends React.Component {
    render() {
        return (
            <section id="thoughts">
                <div className="section-header row">
                    <h2 className="col-sm-12">Thoughts</h2>
                    <p className="col-sm-12">
                        Other values and goals.
                    </p>
                </div>
                <ul className="row">
                    <li>
                        <h3>Real Value</h3>
                        <p>
                            I like to create software that helps people. Good developers and good software companies create products
                            that have value to real people. Software helps people, keeps them safe, or helps them more efficiently
                            create other products to help other people and I want to be a part of it.
                        </p>
                    </li>
                    <li>
                        <h3>Transparency</h3>
                        <p>
                            Be verbose, open, and truthful. Free speech and the world's knowledge at our fingertips
                            are things I don't take lightly living in the US. Everyone deserves transparency from their
                            government, to know full history, and have the ability to openly share thoughts with everyone
                            or only the ones the care about.
                        </p>
                    </li>
                    <li>
                        <h3>Defect</h3>
                        <p>
                            Innovation never comes from those that follow norms. People who go against the grain find
                            opportunities for improvement and new solutions.
                        </p>
                    </li>
                </ul>
            </section>
        )
    }
}