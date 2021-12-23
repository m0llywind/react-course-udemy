import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}
