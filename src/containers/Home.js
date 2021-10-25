import React, { useState } from 'react'
import '../styles/Home.css'
import Card from '../components/Card'

function Home() {

    const [value, setValue] = useState('')
    const [submit, setSubmit] = useState(false)
    const [showError, setShowError] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();

        if (!value) setShowError(true)
        else {
            setShowError(false)
            setSubmit(true)
        }
    }

    return (
        <body>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <input id="search" type="text" placeholder="Search for a github user" onChange={e => setValue(e.target.value)} />
                </form>
                {showError &&
                    <h1>informe um usuário..</h1>
                }
            </div>
            <main>
                {submit &&
                    <Card name={value} />
                }
            </main>
        </body>
    )
}

export default Home