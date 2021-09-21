import React from 'react';
import {Center, Text, VStack} from "@chakra-ui/react";
import ProfileImage from "./ProfileImage";
import StatusInfo from "./StatusInfo";

const ProfileCard = () => {
    return (
            <VStack bg='white' p='2rem'>
                <ProfileImage/>
                <StatusInfo/>
                <Center p='1rem'>
                    <Text>
                        View Profile
                    </Text>
                </Center>
            </VStack>
    );
};

export default ProfileCard;
