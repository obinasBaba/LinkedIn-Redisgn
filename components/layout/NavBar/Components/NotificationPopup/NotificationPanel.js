import React from 'react';
import {Avatar, AvatarGroup, HStack, StackDivider, Text, VStack} from "@chakra-ui/react";
import UserSlot from "../MessagePopup/UserSlot";

const NotificationPanel = () => {

    const userData = [
        {
            name: 'Robert rob',
            msg: 'hi caroline, how you doin...'
        },{
            name: 'James James',
            msg: 'hi caroline, would u mind sharing..'
        },{
            name: 'Jenny James',
            msg: 'hi caroline, would u 6 Floor..'
        },
    ];

    return (
        <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={1}
            align="stretch"
        >

            <VStack spacing={2} align="stretch">

                <Text fontSize="sm"
                      // color={'lightgray'}
                >7 people visit your profile</Text>
                <HStack spacing={2}>
                    <AvatarGroup size="sm" max={4}>
                        <Avatar  name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
                    </AvatarGroup>
                </HStack>
            </VStack>

            {
                userData.map((user, index) =>
                    <UserSlot user={user} />
                )
            }

        </VStack>

    );
};

export default NotificationPanel;
