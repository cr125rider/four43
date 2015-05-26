import React from 'react';

export default
class Work extends React.Component {
    render() {
        return (
            <section id="work">
                <div className="section-header row">
                    <h2 className="col-sm-12">Work Experience</h2>
                    <p className="col-sm-12">
                        Professional employment, please click the small "+" for more detail about specific projects and technologies.
                    </p>
                </div>
                <ol className="row">
                    <li className="col-sm-12">
                        <h3>Media Logic Group</h3>
                        <h4>Senior Software Developer</h4>
                        <span className="experience-date">
                            <time datetime="2011-02-01">February 2011</time>
                            -
                            <time>Present</time>
                        </span>
                        <p className="description">
                            During my time at Media Logic Group we have created a variety of
                            API backed web applications. I have had the opportunity to lead
                            projects through the whole life cycle from conception, through planning,
                            design, and full backend and frontend execution. APIs have been key
                            to our success as a flexible small company and designing them has been
                            very exciting. We work with a variety of data sources and technologies
                            to fulfill our clients needs.
                        </p>
                    </li>
                    <li className="col-sm-12">
                        <h3>The University of Minnesota</h3>
                        <h4>Undergraduate Web/Database Developer</h4>
                        <span className="experience-date">
                            <time datetime="2008-09-01">September 2008</time>
                            -
                            <time datetime="2011-02-01">February 2011</time>
                            <time> (2 years 6 months)</time>
                        </span>
                        <p className="description">
                            With the opportunity to try many aspects of IT, including
                            network administration, server administration, software development and
                            help desk, I found I enjoyed software development the best. We created many
                            internal apps for faculty and staff and helped deploy a host of new services.
                        </p>
                    </li>

                </ol>
            </section>
        )
    }
}