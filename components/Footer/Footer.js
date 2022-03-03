import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className='text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className='row'>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weigth-bold mb-2 text-center'>Rent</li>
                            <li className='text-center'>En este sitio podras encontrar autos</li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weigth-bold mb-2 text-center'>Servicios</li>
                            <li className='text-center'>En este sitio podras encontrar autos</li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weigth-bold mb-2 text-center'>Legal</li>
                            <li className='text-center'>Terminos y condiciones</li>
                            <li className='text-center'>Condiciones de uso</li>
                            <li className='text-center'>Proteccion de datos</li>

                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled text-center'>
                            <li className='font-weigth-bold mb-2 text-center'>Test</li>
                            <img className='m-2' src='/facebook.png' width='30' />
                            <img className='m-2' src='/instagram.png' width='30' />
                            <img className='m-2' src='/linkedin.png' width='30' />
                            <img className='m-2'src='/twitter.png' width='30' />

                        </ul>
                    </nav>
                    
                </div>

            </footer>
        </>
    )
}

export default Footer