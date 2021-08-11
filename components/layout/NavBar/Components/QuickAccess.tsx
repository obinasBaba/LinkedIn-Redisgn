import React from 'react';
import styled from "styled-components";
import {
    Avatar, Button, IconButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton,
    PopoverContent, PopoverHeader, PopoverTrigger
} from "@chakra-ui/react";
import {EmailIcon, PhoneIcon} from "@chakra-ui/icons";
import {Portal} from "next/dist/client/portal";
import NotficationPopup from './NotificationPopup/NotficationPopup'
import MessagePopup from './MessagePopup/MessagePopup'

const AccessContianer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`

const QuickAccess = () => {
    return (
        <AccessContianer>


            <MessagePopup/>

            <NotficationPopup/>


            <Avatar
                size="xs"
                name="Kola Tioluwani"
                src="https://bit.ly/tioluwani-kolawole"
            />


        </AccessContianer>
    );
};

export default QuickAccess;
