import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarRNT from '../components/NavBarXL/NavbarRNT';
import '../styles/globals.css';
import Footer from '../components/Footer/Footer';
import { AuthProvider } from '../context/AuthProvider';
import { CarsProvider } from '../context/CarsProvider';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <NavbarRNT />
        <CarsProvider>
          <Component {...pageProps} />
        </CarsProvider>
        <Footer/>
      </AuthProvider>
    </>
  )
}

export default MyApp
