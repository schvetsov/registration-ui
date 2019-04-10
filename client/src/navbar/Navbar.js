import React from 'react';

const Navbar = () => {

    return(
        <div className="pos-f-t">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <div className="navbar-brand" >
                        <img className="logo" src={require('../availity.png')} alt="logo"/>
                    </div>
                    <div className="navbar-text">
                        Registration
                    </div>
                </div>
            </nav>
        </div>
    )
    
}

export default Navbar;