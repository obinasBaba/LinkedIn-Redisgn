import React, {useContext} from 'react';
import styled from "styled-components";
import {spacing} from "../../../styles/mixins";
import {AppStateContext} from "../../../contexts/AppStateContext";
import {Select, Stack, StackDivider, Text, VStack} from "@chakra-ui/react";
import {TriangleDownIcon} from '@chakra-ui/icons'

const AsideContainer = styled.aside`
  box-sizing: border-box;
  position: sticky;
  //top: calc( (5rem * var(--indent)) + 57px );
  top: ${({top}) => `calc(${top + 5}px + (1rem * var(--indent)))`};
  flex: .25;
  background-color: white;
  height: min-content;

  //border: thin solid red;

  ${spacing('p', 2)};
  ${spacing('ml', 2)};
`

const Aside = () => {

    const asideData = [
        'Relationship',
        'Location',
        'industry'
    ]

    const {
        innerNavBarHeight
    } = useContext(AppStateContext);

    return (
        // <AsideContainer top={innerNavBarHeight}>

        <VStack divider={<StackDivider borderWidth='1.3px' borderColor='gray.100'/>}
                alignItems='flex-start'
                spacing={4}
                marginLeft={5}
                pos='sticky'
                bg='white'

                flex='.25'
                top={`calc(${innerNavBarHeight + 4}px + (1rem * var(--indent)))`}
                h='min-content'
        >

            <VStack divider={<StackDivider borderWidth='1.3px' borderColor='gray.100'/>}
                    alignItems='flex-start'
                    spacing={5}
                    w='calc(100% - (var(--indent) * 2rem) )'
                    m='calc(var(--indent) * 1rem)'
            >
                {
                    asideData.map(txt =>
                        <Stack key={txt}
                               w='100%'
                            // border='thin solid red'
                        >
                            <Text fontSize='small'>{txt}</Text>
                            <Select placeholder={`All ${txt}`} fontSize='small'
                                    color='gray.400'
                                    w='100%'
                                    isFullWidth={true}
                                    icon={<TriangleDownIcon boxSize='.1em'
                                                            fontSize={'xs'}
                                    />}
                            >
                                <option value="option1">All {txt}</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </Stack>
                    )


                }
            </VStack>

            <Text bg='gray.200'
                  w='100%'
                  textAlign='center'
                  fontSize='sm'
                  p={4}
                  cursor='pointer'
            >
                View More Filter
            </Text>


        </VStack>

        // </AsideContainer>
    );
};

export default Aside;
