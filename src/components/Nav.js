import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function Nav() {

    const navStyle1 = {
        color: 'white'
    }

    return (
        <nav>
            {/* <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle1} to="/about">
                <li>About</li>
                </Link>
                <Link style={navStyle1} to="/movie">
                <li>Movie Database</li>
                </Link>
            </ul> */}
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/movie">Movies</a></li>
        </ul>

        </nav>
    )
}

export default Nav
