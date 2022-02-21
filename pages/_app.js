
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarRNT from '../components/NavBarXL/NavbarRNT';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavbarRNT />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
