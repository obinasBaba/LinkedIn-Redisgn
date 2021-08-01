import React from 'react';
import styled from "styled-components";
import {Avatar, IconButton} from "@material-ui/core";
import {MessageOutlined, Notifications, NotificationsOutlined} from "@material-ui/icons";

const AccessContianer = styled.div`
  display: flex;
  gap: .3rem;
  align-items: center;
  justify-content: center;
`

const QuickAccess = () => {
    return (
        <AccessContianer>
            <IconButton size='small' >
                <MessageOutlined fontSize='small'/>
            </IconButton>

            <IconButton size='small'>
                <NotificationsOutlined fontSize='small'/>
            </IconButton>

            <Avatar>M</Avatar>


        </AccessContianer>
    );
};

export default QuickAccess;
