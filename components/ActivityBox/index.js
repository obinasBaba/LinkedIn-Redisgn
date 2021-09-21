import React from 'react';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";

const ActivityBox = () => {

    return (
        <Tabs isLazy>
            <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default ActivityBox;
