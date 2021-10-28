import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/Card.css'
import Repos from './Repos'

export default props => {

    const name = props.name
    const url = `https://api.github.com/users/${name}`
    const [user, setUser] = useState(null)

    let content = null

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setUser(response.data)
            })
    }, [url])

    if (user) {
        content = 
            <div className='card'>
                <div>
                    <img className="avatar" src={user.avatar_url} alt={user.name} />
                </div>
                <div className="user-info">
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                    <ul className="info">
                        <li>{user.followers}<strong>Seguidores</strong></li>
                        <li>{user.following}<strong>Seguindo</strong></li>
                        <li>{user.public_repos}<strong>Repos</strong></li>
                    </ul>
                    <div className='repos'>
                        {<Repos name={name}/>}
                    </div>
                </div>
            </div>
    }

    return (
        content
    )

}