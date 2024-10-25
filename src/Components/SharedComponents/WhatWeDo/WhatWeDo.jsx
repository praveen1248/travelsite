import React from 'react'
import Styles from './whatWeDo.module.css'
import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react'

const WhatWeDo = () => {
    return (
        <Box className={Styles.mainContainer}>
            <Box className={Styles.dogaEV}>
                <Box className={Styles.dogaEVLeft}>
                    <Heading as={'h2'} className={Styles.ilszDX}>
                        What we do
                    </Heading>
                    <Text className={Styles.cTIWFP}>
                        Our travel and service portfolio includes the following:
                    </Text>
                </Box>
                <Box className={Styles.dogaEVRight}>
                    <Box className={Styles.jMHLxS}>
                        <Box>
                            <Heading as={'h6'} className={Styles.jkilIx}>
                                FIT Leisure
                            </Heading>
                            <UnorderedList>
                                <ListItem className={Styles.kohjhs}>Self-drive tours</ListItem>
                                <ListItem className={Styles.kohjhs}>Escorted tours</ListItem>
                                <ListItem className={Styles.kohjhs}>Tailor made tours</ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box className={Styles.jMHLxS}>
                        <Box>
                            <Heading as={'h6'} className={Styles.jkilIx}>
                                Groups leisure
                            </Heading>
                            <UnorderedList>
                                <ListItem className={Styles.kohjhs}>Special groups</ListItem>
                                <ListItem className={Styles.kohjhs}>Theme tours</ListItem>
                                <ListItem className={Styles.kohjhs}>Tailor made tours</ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box className={Styles.jMHLxS}>
                        <Box>
                            <Heading as={'h6'} className={Styles.jkilIx}>
                                Academic groups                                    
                            </Heading>
                            <UnorderedList>
                                <ListItem className={Styles.kohjhs}>School groups</ListItem>
                                <ListItem className={Styles.kohjhs}>University groups</ListItem>
                                <ListItem className={Styles.kohjhs}>Performance and alumni groups</ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box className={Styles.jMHLxS}>
                        <Box>
                            <Heading as={'h6'} className={Styles.jkilIx}>
                                Mice
                            </Heading>
                            <UnorderedList>
                                <ListItem className={Styles.kohjhs}>Meetings</ListItem>
                                <ListItem className={Styles.kohjhs}>Incentives</ListItem>
                                <ListItem className={Styles.kohjhs}>Events</ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box className={Styles.jMHLxS}>
                        <Box>
                            <Heading as={'h6'} className={Styles.jkilIx}>
                                Cruise
                            </Heading>
                            <UnorderedList>
                                <ListItem className={Styles.kohjhs}>Shore excursions</ListItem>
                                <ListItem className={Styles.kohjhs}>Cruise services</ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box className={Styles.jMHLxS}>
                        <Box>
                            <Heading as={'h6'} className={Styles.jkilIx}>
                                Luxury
                            </Heading>
                            <UnorderedList>
                                <ListItem className={Styles.kohjhs}>Tailor-made with our Luxury brand Nine Worlds</ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default WhatWeDo