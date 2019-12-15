import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <div id="navbar">
                <p className='inline-block-element'>I am Navbar</p>
                <p className='inline-block-element'>Downloads</p>
                <p className='inline-block-element'>Videos</p>
                <p className='inline-block-element'>About</p>
            </div>

        );
    }
}

export default Navbar;