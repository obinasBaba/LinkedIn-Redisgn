import {AppProps} from "next/app";
import {ThemeProvider} from "styled-components";
import theme from '../styles/theme'
import '../fonts/fontFace.css'
import {GlobalStyle} from "../styles/GlobalStyles";
import {ChakraProvider} from '@chakra-ui/react'
import AppStateProvider from '../contexts/AppStateContext'
import Layout from "../components/layout";


const CustomApp = ({Component, pageProps}) => {

    const ChildComp = Component.getLayout || (<Layout>
            <Component {...pageProps} />
        </Layout>
    )
    // return Layout((<Component {...pageProps}/>));

    return (
        // <StylesProvider injectFirst>

        // <MuiThemeProvider theme={theme}>
        <AppStateProvider>

            <ChakraProvider>

                <ThemeProvider theme={theme}>

                    <GlobalStyle/>
                    {/*<Layout>*/}
                    {/*    <Layout />*/}
                    {
                        ChildComp instanceof Function ?
                            ChildComp((<Component {...pageProps}/>))
                            :
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>

                    }
                    {/*</Layout>*/}
                </ThemeProvider>
            </ChakraProvider>

        </AppStateProvider>


        // </MuiThemeProvider>
        // </StylesProvider>

    );
};

export default CustomApp;
