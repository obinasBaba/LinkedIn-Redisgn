import React from 'react';
import styled from "styled-components";
import {spacing} from "../../../styles/mixins";
import {Divider, HStack, StackDivider, Text, VStack} from "@chakra-ui/react";
import SearchResultSlot from "./SearchResultSlot";


const MainContent = () => {

    const searchData = [
        {
            title: 'People',
            result: 10,
            items: [
                {}, {}, {}, {}, {}
            ],
        },
        {
            title: 'Companies',
            result: 14,
            items: [
                {}, {}, {}, {}
            ],
        },
    ];

    return (

        <VStack flex='.75'
                alignItems='stretch'
                spacing={5}
        >

            {
                searchData.map(({title, items, result}, i) =>
                    <VStack divider={<StackDivider borderColor="gray.200"/>}
                            bg='white'
                            p={'calc(var(--indent) * 1.25rem)'}
                            alignItems='stretch'
                        // border='thin solid red'
                    >


                        <HStack justifyContent='space-between'
                                width='100%'
                                height='100%'
                                fontSize='sm'
                                color='teal'
                                mb={'calc(var(--indent) * .5rem)'}
                        >
                            <Text>{title}</Text>
                            <Text>{result} results</Text>
                        </HStack>

                        <VStack spacing={5}>
                            {
                                items.map(item => <SearchResultSlot/>)
                            }

                        </VStack>

                    </VStack>
                )
            }


        </VStack>


    );
};

export default MainContent;
