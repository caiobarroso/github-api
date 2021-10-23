import React, { useState } from 'react'
import '../styles/Card.css'
import Bio from './Bio'

export default props => {

    return (
        <div>
            {
                <Bio name={props.name}/>
            }
        </div>
        
         
    )
}

