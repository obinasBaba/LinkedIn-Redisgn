import React, {useEffect, useRef} from 'react';
import {Box, HStack, Text, VStack} from "@chakra-ui/react";
import styled from "styled-components";

const DropDownMenu = styled.div`
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  right: 0;
  padding: 2rem;
  color: black;
  background-color: white;

`


const NavDropDown = ({onBlur}) => {

    const menuData = [
        [
            'Home',
            'Message',
            'Calendar',
            'Requests',
            'Wiki',
        ], [
            'Profile',
            'Edit Profile',
            'My Profile',
            'Improve',
            'Updates',
            'Who viewed',
        ], [
            'My network',
            'Connection',
            'Add contacts',
            'Alumnis',
            'People you know',
            'Statics',
        ], [
            'Interests',
            'Companies',
            'Groups',
            'Slidshare',
            'Learning',
        ], [
            'Wiki',
            'Our partners',
            'Top Clients',
            'Manifesto',
            'Pitching',
        ]
    ]
    const containerRef = useRef(null);

    useEffect(() => {

        containerRef.current.focus()

    }, []);


    return (
        <Box p='2rem'
             pos='absolute'
             width='100%'
             top='calc(100% + 1px)'
             bg='white'
             color='black'
             borderBottom='1px solid #E2E8F0'
             tabIndex={ 0 }
             outline='none'
             ref={containerRef}
             onBlur={onBlur}
        >

            <HStack maxW='5xl'
                    margin='auto'
                    justifyContent='space-between'
                    alignItems='flex-start'
            >


                {
                    menuData.map((menu, i) =>
                        <VStack spacing={ i === 0 ? 3.5 : 1.5}
                                color={ i !== 0 && 'gray'}
                                fontWeight={`${i === 0 && '500'}`}
                                alignItems='flex-start'
                                key={menu[i] + i}
                        >

                            {
                                menu.map((txt, i2) =>

                                    <Text fontWeight={ i2 === 0 && '500'}
                                          color={ i2 === 0 && 'black'}
                                          mb={i !== 0 && i2 === 0 && '.3rem'}
                                          key={txt + i2}
                                    >
                                        {txt}
                                    </Text>


                                )
                            }
                        </VStack>
                    )
                }

            </HStack>
        </Box>
    );
};

export default NavDropDown;
