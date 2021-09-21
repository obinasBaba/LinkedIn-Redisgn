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

const Main = styled.main`
    flex: 1;
`

const LayoutContainer = styled.div`
    display: flex;
  min-height: 100vh;
  flex-flow: column;
`

interface LayoutProps {

}

const Layout: React.FC<LayoutProps> = ({children
                                          }) => {
    return (
        <LayoutContainer>

            <NavBar/>

            <Main>
                {children}
            </Main>

            <Footer>
                <h1>Footer</h1>
            </Footer>

        </LayoutContainer>
    );
};

export default Layout;
