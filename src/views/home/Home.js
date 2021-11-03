import React, { useState } from 'react'
import './Home.css'
import Bio from '../../components/Card'

function Home() {

    const [username, setUsername] = useState('')
    const [value, setValue] = useState('')
    const [submit, setSubmit] = useState(false)
    const [showError, setShowError] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();

        if (!username) setShowError(true)
        else {
            setShowError(false)
            setSubmit(true)
            setValue(username)
        }
    }


    return (
        <div className='main'>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <input id="search" type="text" placeholder="Pesquise por um usuário" onChange={e => setUsername(e.target.value)} />
                </form>
                {showError &&
                    <h1>informe um usuário..</h1>
                }
            </div>
            <main>
                {submit &&
                    <Bio name={value} />
                }
            </main>
        </div>
    )
}

export default Home