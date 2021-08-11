import React from 'react';
import {Avatar, Box, Flex, HStack, Text, VStack} from "@chakra-ui/react";
import styled from "@emotion/styled";


const Boxx = styled( Box )`
    padding: 1rem;
  display: flex;
  //color: black;
`

const UserSlot = ({user: {name, msg}}) => {
    return (
        <HStack mt='.6rem'
                spacing={3}
                alignItems='center'
        >
            <Avatar size={'sm'} src="https://bit.ly/sage-adebayo" />
            <VStack spacing={0}
                    // mr={'3rem'}
                    alignItems='flex-start'
                    color='black'>
                <Text fontWeight="bold" m={0} >{name}</Text>
                <Text fontSize="sm"
                      m={0}
                      lineHeight={.5}
                      color={'gray.300'}
                >{msg}</Text>
            </VStack>
        </HStack>
    );
};

export default UserSlot;
