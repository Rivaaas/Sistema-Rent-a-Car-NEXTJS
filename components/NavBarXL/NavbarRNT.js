import React from 'react';

const NavbarRNT = () => {



    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="/">Rent A Car!</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href='/Catalogue' >Catalogo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Agreement">Contrato</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/VehicleReceipt" tabIndex="-1">Recibir Vehiculo</a>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </>
    )
};

export default NavbarRNT;
