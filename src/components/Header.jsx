import React from 'react';
import Background from '../images/duelingo.jpg'

const imageStyle = {
    // width: "100%",
    // height:"40vh",
    backgroundImage: `url(${Background})`
}


class Header extends React.Component {
    render() {
        
        return (
            <div id="header" style={imageStyle}>
                <header id="home">

                <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">duelingo</h1>
                            <h3>Learning is power</h3>
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
