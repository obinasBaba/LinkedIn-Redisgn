import React from 'react';
import NavBar from "./NavBar";



const Layout: React.FC = ({children}) => {
    return (
        <>

            <NavBar/>

            <main>
                {children}
            </main>

            <footer>

            </footer>

        </>
    );
};

export default Layout;
