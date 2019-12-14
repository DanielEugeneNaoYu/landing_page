import React, { Component } from 'react';


class Header extends Component {
    render() {
        
        return (
            <div>
                <header id="home">

                    <nav id="nav-wrap">

                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

        
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Video Demo</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Download</a></li>
                        </ul> 
                     
                    </nav> 
                    
                <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">duelingo</h1>
                            <h3>Learning is power</h3>
                            <hr />
                            <ul className="social">
                            {/* {networks} */}
                            </ul>
                        </div>
                    </div>

                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                    </p>

                </header>
            </div>
        );
    }
}

export default Header;
