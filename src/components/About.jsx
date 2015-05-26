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
            <section id="about">
                <div className="section-header row">
                    <h2 className="col-sm-12">About Me</h2>
                    <p className="col-sm-12">
                        I am a {this.state.age} year old software developer based out of Minneapolis, Minnesota. I am passionate about the open web and the opportunities it brings to communication and business around the
                        world. Traditional database and other storage systems are also one of my interests. Combining
                        the two with security in the center, I help create products that solve a wide range of
                        problems.
                    </p>
                </div>
                <div id="my-tech" className="row">
                    <div className="col-sm-4 tech-highlight">
                        <div className="tech-container">
                            <h3>Web</h3>
                            <p>
                                Experience in connecting users with content they need. I have helped
                                create web apps and have designed and created web APIs for consumption by other
                                systems and mobile devices. An API centric model is essential for a growing
                                flexible business.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4 tech-highlight">
                        <div className="tech-container">
                            <h3>Big Data</h3>
                            <p>
                                With a background in traditional relational databases and experience in the more
                                loose No-SQL data stores, I have worked with a broad range of storage systems for
                                a wide range data set requirements.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4 tech-highlight">
                        <div className="tech-container">
                            <h3>Security</h3>
                            <p>
                                Everyone has the right to share content securely and anonymously. Systems I help create
                                are secure using the latest proven web and cryptographic technologies to keep company
                                and user data safe.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}