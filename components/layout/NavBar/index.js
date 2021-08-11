import React, {useContext, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import QuickAccess from "./Components/QuickAccess";
import LogoAndDiscover from "./Components/LogoAndDiscover";
import {SearchIcon} from '@chakra-ui/icons'
import {Box, Input, InputGroup, InputLeftElement} from "@chakra-ui/react"
import {AppStateContext} from "../../../contexts/AppStateContext";
import NavDropDown from "./Components/NavDropDown";
import SearchDropDown from "./Components/SearchDropDown";
import router from 'next/router'

const InputWrapper = styled.div`
  //border: thin solid yellowgreen;
  flex-basis: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e7e7e7;
`

const NavBarWrapper = styled.div`
  position: sticky;
  top: 0;
  border-bottom: 1px solid #E2E8F0;
  background-color: white;
  z-index: 999;


  & > :first-child {
    //border: thin solid blue;
  }
`


const NavBar = () => {

    const {
        isDropDownOpen, setIsDropDownOpen,
        searchDropdown, setSearchDropdown,
        setNavBarHeight
    } = useContext(AppStateContext);

    const navWrapperRef = useRef(null);

    const [searchDropDownFocused, setSearchDropDownFocused] = useState(false);


    useEffect(() => {
        if (navWrapperRef.current){
            let height = navWrapperRef.current.getBoundingClientRect().bottom
            console.log(height)
            setNavBarHeight(height)
        }

        return () => {
        };

    }, []);


    const handler = (evt) => {
        if (evt.code !== 'Enter' || evt.target.value.trim().length <= 0)
            return;

        router.push(`/search/${evt.target.value}`)
        setSearchDropdown(false)
    }

    return (
        <NavBarWrapper ref={navWrapperRef}>

            <Box maxW='6xl' justifyContent='space-between'
                 p={3}
                 m={'auto'}
                 d='flex' alignItems="center">

                <LogoAndDiscover/>

                <InputWrapper onClick={() => {
                    setSearchDropdown(true)
                    setSearchDropDownFocused(true)
                }}>
                    <InputGroup size="sm">
                        <InputLeftElement
                            pointerEvents="none"
                            children={<SearchIcon color="gray.300"/>}
                        />
                        <Input placeholder='Search...'
                               bg={'#f5f5f5'}
                               onKeyPress={handler}
                               onBlur={() => {
                                   setSearchDropDownFocused(false)
                               }}
                               color='#000000'/>

                    </InputGroup>
                </InputWrapper>

                <QuickAccess/>

            </Box>

            {
                isDropDownOpen &&
                <NavDropDown onBlur={() => {
                    setTimeout(() => {
                        isDropDownOpen && setIsDropDownOpen(false)
                    }, 200)
                }
                }/>
            }

            {
                searchDropdown &&
                <SearchDropDown onFocus={() => setSearchDropDownFocused(true)}
                                onBlur={() => {
                                    if (searchDropDownFocused)
                                        return;

                                    setSearchDropdown(false)
                                }}
                />
            }


        </NavBarWrapper>

    );
};

export default NavBar;
