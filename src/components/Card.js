import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/Card.css'


export default props => {

    const url = `https://api.github.com/users/${props.name}`
    const [user, setUser] = useState(null)
    const [repos, setRepos] = useState(null)

    let content = null

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setUser(response.data)
            })
    }, [url])

    if (user) {
        content =
            <div className="card">
                <div>
                    <img class="avatar" src={user.avatar_url} alt={user.name} />
                </div>
                <div class="user-info">
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                    <ul class="info">
                        <li>{user.followers}<strong>Followers</strong></li>
                        <li>{user.following}<strong>Following</strong></li>
                        <li>{user.public_repos}<strong>Repos</strong></li>
                    </ul>
                    <div id="repos"></div>
                </div>
            </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

