import React from 'react'
import Styles from './AboutSection.module.css'
import { Box, Heading, Text } from '@chakra-ui/react'

const AboutSection = () => {
    return (
        <Box className={`iqZQBq`}>
            <Box className={Styles.spacer}>
                <Box className={Styles.spacerInner}>
                    <Box className={Styles.spacerInnerLeft}>
                        <Heading as={'h5'} className={Styles.headingTagline}>
                            About Iceland Travel
                        </Heading>
                        <Heading as={'h1'} color="#1B1831" lineheight="80" font-size="72" className={Styles.headingSubHeading}>
                            Your DMC in Iceland
                        </Heading>
                    </Box>
                    <Box className={Styles.spacerInnerRight}>
                        <Text mb={'1.5rem'}>
                            Iceland Travel was founded in 1936 – back when they called travellers “explorers” rather than “tourists”. And for almost 100 years now, we’ve been proudly serving the diverse needs of clients from all four corners.
                        </Text>
                        <Text mb={'1.5rem'}>
                            Every day, our experts on the ground craft unforgettable travel experiences and take guests on uniquely local journeys. This is why we are the leading B2B travel company in Iceland, able to care for your guests in the best possible way.
                        </Text>
                    </Box>
                </Box>
            </Box>


            
            
        </Box>
    )
}

export default AboutSection