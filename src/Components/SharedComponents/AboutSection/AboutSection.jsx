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
                            About Travellers Solution
                        </Heading>
                        <Heading as={'h1'} color="#1B1831" lineheight="80" font-size="72" className={Styles.headingSubHeading}>
                            Highlighting your expertise and specialization in European travel
                        </Heading>
                    </Box>
                    <Box className={Styles.spacerInnerRight}>
                        <Text mb={'1.5rem'}>
                            Our specialization in European destinations allows us to offer unparalleled travel experiences tailored to various needs and preferences.
                        </Text>
                        <Text mb={'1.5rem'}>
                            Our vision is to become the top preferred vendor for European travel from the Indian market. We are committed to achieving the highest passenger travel numbers year after year by continuously enhancing our service offerings and maintaining the highest standards of customer satisfaction.
                        </Text>
                    </Box>
                </Box>
            </Box>


            
            
        </Box>
    )
}

export default AboutSection