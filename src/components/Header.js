import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'; 
import logo from './assets/img/basil_100px.png'

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            className="d-inline-block"
                        />{' '}
                        The Pantry Assistant
                    </Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}

export default Header