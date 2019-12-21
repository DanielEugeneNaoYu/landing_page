import React from 'react';
// import Img from 'react-image'
import Background from '../images/space.jpg'
import logo from '../images/logo_white.png'


const imageStyle = {
    backgroundImage: `url(${Background})`
}


class Header extends React.Component {
    render() {
        
        return (
            <div id="header" style={imageStyle}>
                <header id="home">
                <div className="row banner">
                <img src={logo} alt="logo" />
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
