import React, { useState } from 'react'
import '../styles/Home.css'
import Bio from '../components/Card'

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
                    <input id="search" type="text" placeholder="Pesquise por um usuário" onChange={e => setValue(e.target.value)} />
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
        </body>
    )
}

export default Home