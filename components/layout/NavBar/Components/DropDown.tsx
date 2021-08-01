import React from 'react';
import styled from "styled-components";
import {Divider, Typography} from "@material-ui/core";

const DropDownContainer = styled.div`
    display: flex;
  gap: .3rem;
  
  .divider{
    background-color: grey;
    height: 50px;
  }
`

const Icon = styled.div`
  color: #1b5fa9;
  height: 25px;
  width: 25px;
`

const DropDown = () => {
    return (
        <DropDownContainer>

            <Icon>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="100%" height="100%" viewBox="0 0 34 34"
                     className="global-nav__logo">
                    <title>
                        LinkedIn
                    </title>

                    <g>
                        <path
                            d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
                            fill="currentColor"/>
                    </g>
                </svg>
            </Icon>

            <Divider className='divider' orientation='vertical' />


            <Typography variant='subtitle1' color='textSecondary' >Discover</Typography>

        </DropDownContainer>
    );
};

export default DropDown;
