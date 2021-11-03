import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../card/styles.css'

export default props => {

    const url = `https://api.github.com/users/${props.name}`
    const [repos, setRepos] = useState({})

    useEffect(() => {
        axios.get(url + '/repos')
            .then(response => {
                setRepos(response.data)
            })
    }, [url])

    return (
        Array.from(repos, child => (
            <a className="repo" href={child.html_url} target="_blank" rel="noreferrer">{child.name} </a>
        ))
    )
}