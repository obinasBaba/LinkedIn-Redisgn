import React from 'react';
import {Container} from "@chakra-ui/react";
import ProfileCard from "./ProfileCard";
import PostContents from "./PostContents";
import Latest from "./Latest";

const HomePage = () => {
    return (

        <Container maxW='6xl' display='flex'
                   border='thin solid red'
                   alignItems='flex-start'
                   minH='100vh'>

            <ProfileCard/>
            <PostContents/>
            <Latest/>
        </Container>
    );
};

export default HomePage;
