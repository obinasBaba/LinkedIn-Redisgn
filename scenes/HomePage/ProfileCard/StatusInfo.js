import React from 'react';
import {HStack, Text, VStack} from "@chakra-ui/react";
import styled from "styled-components";


const StatusInfo = ({}) => {
    return (
        <HStack >
            <VStack>
                <Text border='thin solid lightgray' >378</Text>
                <Text border='thin solid lightgray'>Connections</Text>
            </VStack>

            <VStack>
                <Text border='thin solid lightgray' >25</Text>
                <Text border='thin solid lightgray'>Views</Text>
            </VStack>
        </HStack>
    );
};

export default StatusInfo;
