import React from 'react';

const Navbar = () => {

    return(
        <div className="pos-f-t">
            <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" >
                <img className="logo" src={require('../availity.png')} />
                </a>
                <div className="navbar-text">
                    Registration
                </div>
            </div>
            </nav>
        </div>
    )
    
}

export default Navbar;