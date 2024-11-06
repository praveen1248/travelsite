import React from 'react'
import { Box, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import Styles from './ExploretheTravel.module.css'
import mapImage from './images/map-1.png'

const ExploretheTravel = () => {
    return (
        <Box className={Styles.exploreContainer} mt={'20px'}>
            <Box className={Styles.InnerCon}>
                <Grid
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                >
                    <GridItem rowSpan={2} colSpan={3}> 
                        <Image src={mapImage} />
                    </GridItem>
                    <GridItem colSpan={2}> 
                        <Heading className={Styles.heading}>
                            Travel Partners Around the World
                        </Heading>
                        <Text textAlign={'left'} className={Styles.p}>
                            Wherever your customers hail from, we would love to welcome them to our home. Iceland Travel is a member of many domestic and international associations, including Icelandic Travel Industry Association, The United States Tour Operators Association (USTOA), The Japan Association of Travel Agents (JATA), and many more.
                        </Text>
                    </GridItem>
                </Grid>
            </Box>
            
        </Box>
    )
}

export default ExploretheTravel