import { Outlet } from 'react-router-dom';
import NavBar from './NavbarComponent';
import FooterComponent from './FooterComponent';

const ProtectedRoutes = () => {

    return (
        <>
            <NavBar/>
            <Outlet />   
            <FooterComponent />         
        </>
        )

}

export default ProtectedRoutes