import React from 'react';

export default
class Projects extends React.Component {
    render() {
        return (
            <section id="projects">
                <div className="section-header row">
                    <h2 className="col-sm-12">Projects</h2>
                    <p className="col-sm-12">
                        Other development related projects that keep be busy on top of my other hobbies.
                    </p>
                </div>
                <ul className="row">
                    <li>
                        <h3>451 Unavailable - <a className="lead" href="http://www.451unavailable.org/">451unavailable.org</a></h3>
                        <p>
                            The 451 Unavailable group is encouraging transparency for censorship around the world. They have created a proposal
                            for the HTTP 451 Unavailable status code that servers should return if they are unable to return content
                            due to censorship. The spec can be found here: <a href='http://tools.ietf.org/html/draft-tbray-http-legally-restricted-status-03'>IETF Legally Restricted Status</a>.
                            I am looking to get more involved in an organization role with the group.
                        </p>
                    </li>
                    <li>
                        <h3>SleepyTable - <a className="lead" href="https://github.com/hamweather/sleepytable">github.com/hamweather/sleepytable</a></h3>
                        <p>
                            SleepyTable is an open source project sponsored by Media Logic Group. It was designed to ingest web API's
                            and allow for paging, filtering, and sorting server side. I was able to release the plugin
                            as open source and am looking for more developers for the project. It was originally developed as a jQuery plugin
                            but I would like to update it with a more modern framework like Bootstrap.
                        </p>
                    </li>
                </ul>
            </section>
        )
    }
}