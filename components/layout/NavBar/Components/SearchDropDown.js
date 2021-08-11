import React, {useContext, useEffect, useRef} from 'react';
import {Box, HStack, StackDivider, Text, VStack} from "@chakra-ui/react";
import UserSlot from "./MessagePopup/UserSlot";
import {AppStateContext} from "../../../../contexts/AppStateContext";


const SearchDropDown = ({onBlur, onFocus}) => {

    const containerRef = useRef(null);
    const { searchDropdown, setSearchDropdown } = useContext(AppStateContext);
    const categoryData = [
        {
            people: [
                {
                    name: 'cecile vuilet',
                    carrier: 'Trainee . Corporate'
                }, {
                    name: 'adellie vuilard',
                    carrier: 'Associate . Disputes'
                }, {
                    name: 'Alexandre Vuilard',
                    carrier: 'Associate . Disputes'
                }, {
                    name: 'Simone Ravera',
                    carrier: 'Partner . Corporate'
                },
            ]
        },
        {
            companies: [
                {
                    name: 'Louis Vuitton',
                    carrier: 'Luxury Goods & Jewellery . 10,000+ employees'
                }, {
                    name: 'Vuit',
                    carrier: 'information Technology and Services . 1-200 employees'
                }, {
                    name: 'Vuit Design',
                    carrier: 'Management consulting'
                }
            ]
        },
        {
            clients: [
                {
                    name: 'cecile vuilet',
                    carrier: 'Trainee . Corporate'
                }, {
                    name: 'adellie vuilard',
                    carrier: 'Associate . Disputes'
                }
            ]
        }
    ];

    useEffect(() => {

        // containerRef.current.focus()

    }, []);

    return (
        <Box p='1rem'
             pos='absolute'
             width='100%'
             top='calc(100% + 1px)'
             bg='white'
             color='black'
             borderBottom='1px solid #E2E8F0'
             tabIndex={0}
             zIndex={11}
             outline='none'
             ref={containerRef}
             onFocus={() => {
                 // onFocus()
             }}
             onBlur={() => {
                 console.log('onBlur')
                 onBlur()
             }}
        >

            <VStack spacing={7}
                    zIndex={2}
                    // border={'thin solid red'}
            >
                {
                    categoryData.map((obj, index) =>
                        <HStack
                            divider={<StackDivider color='gray.200'/>}
                            spacing={5}
                            width='100%'


                        >

                            <Text textAlign='end'
                                  mr='2rem'
                                  flex='.3'>
                                {Object.keys(obj)}
                            </Text>

                            <VStack alignItems='flex-start'
                                    marginLeft='auto'
                                    flex='.7'
                                    alignSelf='strech'
                                    spacing={5}
                            >
                                {
                                    obj[Object.keys(obj)].map(i => {

                                        return <UserSlot user={{name: i.name, msg: i.carrier}}/>
                                    })
                                }
                            </VStack>

                        </HStack>
                    )
                }

            </VStack>


        </Box>
    );
};

export default SearchDropDown;
