import React from 'react'
import '../styles/Nav.css'
import {Link} from 'react-router-dom'

function Nav() {

    const navStyle = {
        color: 'white',
        textDecoration: 'none',
    }
    
    return (
       <nav>
           <h3>Logo</h3>
           <ul className='nav-links'>
                <Link to="/" style={navStyle}>
                    <li>Home</li>
               </Link>
               <Link to="/about" style={navStyle}>
                    <li>About</li>
               </Link>
               <Link to="/shop" style={navStyle}>
                    <li>About</li>
               </Link>
           </ul>
       </nav>
    )
}

export default Nav