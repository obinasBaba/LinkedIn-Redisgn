import React from 'react';
import {Box, Container, Flex, Text} from "@chakra-ui/react";
import {useRouter} from "next/router";
import styled from "styled-components";
import NavigationBar from './NavigationBar'
import {heightWidth, spacing} from "../../styles/mixins";
import SearchResultSlot from './components/SearchResultSlot'
import MainContent from "./components/MainContent";
import Aside from "./components/Aside";

const SearchPageContainer = styled.section`
  display: flex;
  flex-flow: column;
  color: black;

  ${spacing('gap', 2)};
`


const Main = styled.main`
  flex: .75;
  //border: thin solid blue;
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

export default Search;
