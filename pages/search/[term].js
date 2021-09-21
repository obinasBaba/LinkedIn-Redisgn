import React from 'react';
import {Container} from "@chakra-ui/react";
import {useRouter} from "next/router";
import styled from "styled-components";
import NavigationBar from '../../components/TabNavigationBar'
import {spacing} from "../../styles/mixins";
import MainContent from "./components/MainContent";
import Aside from "./components/Aside";
import Layout from "../../components/layout";

const SearchPageContainer = styled.section`
  display: flex;
  flex-flow: column;
  color: black;

  ${spacing('gap', 2)};
`


const Search = () => {

    const router = useRouter()


    console.log(router.query)


    return (
        <SearchPageContainer>
            <NavigationBar/>

            <Container maxW='6xl' display='flex'>

                <MainContent/>
                <Aside/>

            </Container>
        </SearchPageContainer>
    );
};

Search.getLayout = (page) => (
    <Layout innerNav={{
        isVisible: true,
        Links: [

        ]
    }} >
        {page}
    </Layout>
)

export default Search;
