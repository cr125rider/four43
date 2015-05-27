import React from 'react';

export default
class About extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            age: this.getAge()
        };
    }

    getAge() {
        var birthDate = new Date(1989, 6, 30);
        var now = new Date();
        var age = now.getFullYear() - birthDate.getFullYear();
        var month = now.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && now.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    render() {
        return (
            <section id="about" className="container-fluid">
                <div className="row">
                    <div className="section-header col-sm-4 col-sm-offset-3 section-header">

                        <h2>About</h2>
                        <h3>Data, Security, and the Web</h3>
                        <p>
                            Seth is a software developer based out of Minneapolis, Minnesota. He is passionate about
                            the open web and the opportunities it brings to communication and businesses around the
                            world. Using big data processing, combined with smart analytics, and responsive user interfaces,
                            Seth creates real-time applications that solve problems for modern day business needs.
                        </p>
                    </div>
                    <div id="headshot-container" className="col-sm-2">
                        <img id="headshot" src="./img/headshot.jpg" alt="Seth's pretty mug" className="img-circle" />
                    </div>
                </div>
            </section>
        )
    }
}