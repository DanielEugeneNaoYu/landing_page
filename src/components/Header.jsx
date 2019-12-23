import React from 'react';
import Background from '../images/space.jpg'
import logo from '../images/logo_white.png'


const imageStyle = {
    backgroundImage: `url(${Background})`
}


class Header extends React.Component {
    render() {
        
        return (
            <div id="header" style={imageStyle}>
            
                <div className="row banner">
                <img src={logo} alt="logo" id="logo" />
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                    </p>
              
            </div>
        );
    }
}

export default Header;
