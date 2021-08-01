import {AppProps} from "next/app";
import {ThemeProvider} from "styled-components";
import theme from '../styles/theme'
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import '../fonts/fontFace.css'
import {GlobalStyle} from "../styles/GlobalStyles";
import Layout from "../components/layout";


const CustomApp = ({Component, pageProps}: AppProps) => {

    return (
        // <StylesProvider injectFirst>

        <MuiThemeProvider theme={theme}>

            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <GlobalStyle/>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </MuiThemeProvider>
        // </StylesProvider>

    );
};

export default CustomApp;
