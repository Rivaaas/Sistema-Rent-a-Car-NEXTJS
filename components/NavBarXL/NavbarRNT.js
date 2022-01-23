import React from 'react';

import Link from 'next/link';

const NavbarRNT = () => {



    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ">
                    <Link className="navbar-brand" href="/">Rent A Car!</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href='/Catalogue' >Catalogo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="Agreement">Contrato</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/VehicleReceipt" tabIndex="-1">Recibir Vehiculo</Link>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </>
    )
};

export default NavbarRNT;
