import React from 'react';

import Link from 'next/link';


const NavbarRNT = () => {



    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">Rent A Car!</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>

                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" href='/Catalogue' >Catalogo</Link>
                            <Link className="nav-link" href="Agreement">Contrato</Link>
                            <Link className="nav-link" href="/VehicleReceipt" tabIndex="-1">Recibir Vehiculo</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default NavbarRNT;
