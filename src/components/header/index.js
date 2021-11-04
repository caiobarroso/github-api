import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

function Nav() {

    const navStyle = {
        color: 'white',
        textDecoration: 'none',
    }
    
    return (
       <nav>
           <h3>Logo</h3>
           <div className='nav-links'>
                <Link to="/" style={navStyle}>
                    <li>github-api</li>
               </Link>
               <Link to="/about" style={navStyle}>
                    <li>spotify</li>
               </Link>
               <Link to="/shop" style={navStyle}>
                    <li>...</li>
               </Link>
           </div>
       </nav>
    )
}

export default Nav