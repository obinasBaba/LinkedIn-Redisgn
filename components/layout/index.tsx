import React from 'react';
import NavBar from "./NavBar";
import styled from "styled-components";


const Footer = styled.footer`
  color: black;
  width: 100%;
  padding: 3rem 0;
  text-align: center;
  border-top: thin solid gray;
  margin-top: 3rem;
`


const Layout: React.FC = ({children}) => {
    return (
        <>

            <NavBar/>

            <main>
                {children}
            </main>

            <Footer>
                <h1>Footer</h1>
            </Footer>

        </>
    );
};

export default Layout;
