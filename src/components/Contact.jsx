import React from 'react';

export default
class Contact extends React.Component {

    render() {
        return (
        <section id="contact" className="container-fluid plain">
            <div className="row">
                <div className="section-header col-sm-6 col-sm-offset-3 section-header">

                    <h2>Interested?</h2>
                    <h3>Seth is available for consulting for your Web or Big Data project:</h3>
                    <div className="contact-footer">
                        <a className="btn btn-success btn-lg"><i className="fa fa-envelope" title="Email me directly"></i> Email</a>
                        <a className="btn btn-success btn-lg"><i className="fa fa-linkedin-square"></i> LinkedIn</a>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}