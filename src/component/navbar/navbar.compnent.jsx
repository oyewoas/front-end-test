import React from 'react';
import './navbar.styles.scss'
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav className="fixed-top navbar navbar-expand-lg">
        <div className="container">
            <Link className="navbar-brand" to="/">Compare.TXT</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link className="nav-item nav-link active" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/signin">Sign In</Link>
                </div>
            </div>
        </div>  
    </nav>
)

export default NavBar