import React from 'react';
import styled from "styled-components";
import {Avatar, Container, TextField} from "@material-ui/core";
import {spacing} from "../../../styles/mixins";
import QuickAccess from "./Components/QuickAccess";
import DropDown from "./Components/DropDown";

const NavBarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //border: thin solid red;

  ${spacing('p', 1)};
`

const Input = styled.div`
  //border: thin solid yellowgreen;
  flex-basis: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  .MuiFilledInput-inputMarginDense{
    padding-top: 10px;
  }

  .MuiInputLabel-filled.MuiInputLabel-marginDense{
    //transform: translate(12px, 17px) scale(1);
  }

  .MuiFilledInput-underline:before{
    content: none;
  }
  
  *{
    //max-height: 100%;
    //height: 100%;
  }
`

const NavBar = () => {
    return (
        <NavBarContainer maxWidth='xl'   >

            <DropDown/>

            <Input>
                <TextField size='small' variant='filled'
                           margin='none'
                           fullWidth label='search ...'/>
            </Input>

            <QuickAccess/>

        </NavBarContainer>
    );
};

export default NavBar;
