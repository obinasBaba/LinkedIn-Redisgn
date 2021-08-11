import React from 'react';
import styled from "styled-components";
import {Avatar, Button, Divider, Flex, HStack, StackDivider, Text, VStack, Wrap} from "@chakra-ui/react";
import {spacing} from "../../../styles/mixins";
import {TriangleDownIcon} from "@chakra-ui/icons";

const SlotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

    // ${spacing('pv', 2)};
  //border: thin solid red;
`

const SearchResultSlot = () => {
    return (
        <HStack w='100%'
                spacing={4}
                alignItems='center'
            // justifyContent='space-between'

        >

            <Avatar size="md" name="Kent Dodds" src="https://bit.ly/kent-c-dodds"/>

            <VStack w='100%'
                    spacing={4}
            >
                <HStack w='100%'
                        justifyContent='space-between'
                >
                    <VStack alignItems='flex-start'
                            spacing={-1}
                            fontSize='xs'
                    >
                        <Text fontSize='sm'>Jhon Vuitton</Text>
                        <Text color='lightblue' mb='11px'>Parker Lewis</Text>
                        <Text color='gray.400'
                        >London, United Kingdom-Corporate-Partner</Text>
                    </VStack>


                    <Button colorScheme="teal"
                            borderRadius='500px'
                            variant="outline"
                            ml='auto'
                            size='sm'
                            fontSize='xs'
                            rightIcon={<TriangleDownIcon boxSize='.5em'
                                                         viewBox={'0 -4 24 24'}
                            />}
                    >
                        Connect
                    </Button>

                </HStack>

                <Divider flex='1' borderColor="gray.200"
                         mb='2rem'
                />

            </VStack>



        </HStack>
    );
};

export default SearchResultSlot;
