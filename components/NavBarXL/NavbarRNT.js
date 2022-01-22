import React from 'react';

const NavbarRNT = () => {



    return (

        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="/">Rent A Car!</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href='/Catalogue' >Catalogo</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Agreement">Contrato</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/VehicleReceipt" tabindex="-1">Recibir Vehiculo</a>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </>
    )
};

export default NavbarRNT;
