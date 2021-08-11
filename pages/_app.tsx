import {AppProps} from "next/app";
import {ThemeProvider} from "styled-components";
import theme from '../styles/theme'
import '../fonts/fontFace.css'
import {GlobalStyle} from "../styles/GlobalStyles";
import Layout from "../components/layout";
import {ChakraProvider} from '@chakra-ui/react'
import AppStateProvider from '../contexts/AppStateContext'


const CustomApp = ({Component, pageProps}: AppProps) => {

    return (
        // <StylesProvider injectFirst>

        // <MuiThemeProvider theme={theme}>
        <AppStateProvider>

            <ChakraProvider>

                <ThemeProvider theme={theme}>

                    <GlobalStyle/>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </ChakraProvider>

        </AppStateProvider>


        // </MuiThemeProvider>
        // </StylesProvider>

    );
};

export default CustomApp;
