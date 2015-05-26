import React from 'react';

export default
class App extends React.Component {
    render() {
        return (
            <div>
                <div id="title-row" className="row">
                    <nav id="nav-side" className="col-sm-2 block-container" role="navigation">
                        <ul className="nav nav-pills nav-stacked">
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#work">Work</a>
                            </li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#thoughts">Thoughts</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="col-sm-6 col-sm-offset-1 block-container header-right-col">
                        <h1 className="title">
                            <span className="letters">FOUR</span>
                            <span className="numbers">43</span>
                        </h1>
                        <p className="lead">The professional home of&nbsp;
                            <span className="name">Seth Miller</span>
                        </p>
                    </div>
                </div>
                <div id="social-row" className="row">
                    <div id="social-container" className="col-sm-7 col-sm-offset-3 block-container header-right-col">
                        <a id="social-github" className="social-link" href="https://github.com/cr125rider">
                            <i className="icon-github" title="Fork me on GitHub - cr125rider"></i>
                        </a>
                        <a id="social-linkedin" className="social-link" href="http://www.linkedin.com/profile/view?id=57827297">
                            <i className="icon-linkedin" title="View my professional profile on LinkedIn"></i>
                        </a>
                        <a id="social-twitter" className="social-link" href="https://twitter.com/seth_j_miller">
                            <i className="icon-twitter" title="Follow my month to month Twitter updates"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}