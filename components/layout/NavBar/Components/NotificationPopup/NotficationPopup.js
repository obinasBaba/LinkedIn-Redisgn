import React from 'react';
import {
    Button,
    IconButton, Popover,
    PopoverArrow, PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger, Tab, TabList, TabPanel, TabPanels, Tabs
} from "@chakra-ui/react";
import {PhoneIcon} from "@chakra-ui/icons";
import {Portal} from "next/dist/client/portal";
import NotificationPanel from "./NotificationPanel";
import RequestPanel from "./RequestPanel";


const NotficationPopup = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <IconButton aria-label='messages'
                            size='sm'
                            icon={<PhoneIcon color={'lightgray'}/>}

                />
            </PopoverTrigger>
            <Portal type={'div'}>
                <PopoverContent>
                    <PopoverArrow/>
                    <Tabs isFitted variant="enclosed"
                          color='black'
                    >
                        <TabList mb="1em">
                            <Tab>
                                <Button>
                                    Notification
                                </Button>
                            </Tab>
                            <Tab>
                                <Button>
                                    Requests
                                </Button>
                            </Tab>
                        </TabList>
                        <TabPanels>

                            <TabPanel>
                                <NotificationPanel/>
                            </TabPanel>

                            <TabPanel>
                                <RequestPanel />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </PopoverContent>
            </Portal>
        </Popover>
    );
};

export default NotficationPopup;
