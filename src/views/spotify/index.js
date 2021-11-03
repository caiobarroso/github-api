import React from 'react'
import './styles.css'

function About() {
    return (
        <div className='main-content'>
            <div className='sections'>
                <section className='section-01'>
                    <div className='images'>
                        <img src='https://www-growth.scdn.co/static/download/laptop.svg'></img>
                        {/* <img src='https://www-growth.scdn.co/static/download/green-circle.svg'></img>
                        <img src='https://www-growth.scdn.co/static/download/green-success-check.svg'></img> */}
                    </div>
                    <div className='text-area'>
                        <h1 id='main-title'>Baixe o Spotify</h1>
                        <p id='subtitle'>Escute milhões de músicas e podcasts no seu dispositivo.</p>
                    </div>
                    <button>Baixar</button>
                </section>

                <section className='section-02'>
                    <div className='text-area'>
                        <h1 id='main-title'>Curta as suas músicas também no seu celular ou tablet.</h1>
                        <p id='subtitle'>Ouvir música no celular ou tablet é fácil, divertido e grátis.</p>
                    </div>
                    <div className='icons'>
                        <img src='https://www-growth.scdn.co/static/badges/apple/pt.png'></img>
                        <img src='https://www-growth.scdn.co/static/badges/google/pt.png'></img>
                        <img src='https://www-growth.scdn.co/static/badges/microsoft-windows/pt.png'></img>
                    </div>
                </section>

                <section className='section-03'>
                    <div className='image'>
                        <img src='https://www-growth.scdn.co/static/download/all-devices.svg'></img>
                    </div>
                    <div className='text-area'>
                        <h3>Uma só conta para curtir a música em qualquer dispositivo.</h3>
                    </div>
                    <div className='allElements'>
                        <ul id='links'>
                            <li style={{listStyle:'none'}}>CELULAR</li>
                            <li>COMPUTADOR</li>
                            <li>TABLET</li>
                            <li>CARRO</li>
                            <li>PLAYSTATION</li>
                            <li>XBOX</li>
                            <li>TV</li>
                            <li>AUTO-FALANTE</li>
                            <li>WEB PLAYER</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About