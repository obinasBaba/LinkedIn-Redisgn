import React from 'react';
import {Avatar, Center, Text, VStack} from "@chakra-ui/react";

const ProfileImage = () => {
    return (
        <Center p={'1rem'}>

            <VStack>
                <Avatar size="lg" name="Christian Nwamba"
                        src="https://bit.ly/code-beast" />
                <Text variant='md'>Caroline Belfort</Text>
                <Text variant='p'
                      size='xs'
                      mt='0px !important;'
                      color='lightgrey'>Senior Associates</Text>
            </VStack>
        </Center>
    );
};

export default ProfileImage;
