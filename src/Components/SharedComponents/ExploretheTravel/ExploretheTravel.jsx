import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import Styles from './ExploretheTravel.module.css'
import mapImage from './images/map-1.png'

const ExploretheTravel = () => {
    return (
        <Box className={Styles.exploreContainer}>
            <Heading className={Styles.heading}>
                Explore the World for Travel
            </Heading>
            <Box className={Styles.mapInner} backgroundImage={mapImage}>
                <Box className={Styles.mapContent}>

                </Box>
            </Box>
        </Box>
    )
}

export default ExploretheTravel