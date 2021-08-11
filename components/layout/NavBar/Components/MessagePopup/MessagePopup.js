import React from 'react';
import {
    Box,
    Button, Divider,
    IconButton, Popover,
    PopoverArrow, PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger, StackDivider, Text, VStack
} from "@chakra-ui/react";
import {AddIcon, CloseIcon, EmailIcon} from "@chakra-ui/icons";
import {Portal} from "next/dist/client/portal";
import UserSlot from "./UserSlot";



const MessagePopup = () => {

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
        <Popover preventOverflow={true} overflow='hidden'>
            <PopoverTrigger>
                <IconButton size='small'
                            aria-label='notification'
                            icon={<EmailIcon color={'lightgray'}/>}
                />
            </PopoverTrigger>

            <Portal type={'div'}>
                <PopoverContent>
                    <PopoverArrow/>
                    <PopoverHeader p={0} overflow='hidden'>
                        <Box display='flex'
                             alignContent='center'
                             justifyContent='space-between'
                             p='1rem'
                             height='100%'
                             width='100%'
                             bg='blue'
                             // borderRadius='5px'
                        >
                            <Text>Messages</Text>

                            <IconButton size='small'
                                        aria-label='notification'
                                        icon={<AddIcon color={'lightgray'}/>}
                            />

                        </Box>

                    </PopoverHeader>
                    {/*<PopoverCloseButton/>*/}
                    <PopoverBody>
                        <VStack
                            divider={<StackDivider borderColor="gray.200" />}
                            spacing={2}
                            align="stretch"
                        >
                            {
                                userData.map((user, index) =>
                                    <UserSlot user={user} />
                                )
                            }
                        </VStack>

                    </PopoverBody>
                </PopoverContent>
            </Portal>
        </Popover>
    );
};

export default MessagePopup;
