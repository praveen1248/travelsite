import React from 'react';
import Styles from './services.module.css';
import TitleWrapper from '../../Widgets/TitleWrapper/TitleWrapper'
import {Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box,} from '@chakra-ui/react'


const Services = () => {
    return (
        <>
            <TitleWrapper 
                bannerImage={'https://leisuretrips.co.in/wp-content/uploads/2020/11/breadcrumb-bg.jpg'} 
                mainTitle={'Our Services'}
                subTitle={'Background information about Travellers Solution'}
            />
            <Box width={'100%'} maxWidth={'1170px'} m={'0 auto'} p={'60px 0'}>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    Free Independent Travel (FIT)
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                                Section 2 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </>
    );
};

export default Services;
