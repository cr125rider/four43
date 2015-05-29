import React from 'react';

export default
class Updates extends React.Component {
    render() {
        return (
            <section id="updates">
                <div className="section-header row">
                    <h2 className="col-sm-12">Updates</h2>
                    <p className="col-sm-12">
                        A small micro-blog that's powered by my Tumblr updates. Tumblr is a great micro-blogging
                        platform, I created a small Backbone-Marionette wrapper for their stream and deployed it here.
                    </p>
                </div>
                <div id="tumblr-content"></div>
            </section>
        )
    }
}