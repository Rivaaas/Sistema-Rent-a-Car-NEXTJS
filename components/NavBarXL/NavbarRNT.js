import React from 'react';

import Link from 'next/link';


const NavbarRNT = () => {



    return (

        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a className="navbar-brand" href="/">Rent A Car!</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

                        <span class="navbar-toggler-icon"></span>

                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a className="nav-link active" aria-current="page" href='/Catalogue' >Catalogo</a>
                            <a className="nav-link" href="Agreement">Contrato</a>
                            <a className="nav-link" href="/VehicleReceipt" tabIndex="-1">Recibir Vehiculo</a>

                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default NavbarRNT;
