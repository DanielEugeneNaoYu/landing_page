
import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        {/* <img className="profile-pic" src={image} alt="" /> */}
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        {/* <p>{bio}
                        </p> */}
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
  
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href="aaa.pdf" className="button" download="CV.pdf">
                                        <i className="fa fa-download"></i>Download Resume</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

        export default About;
