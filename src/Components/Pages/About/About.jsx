import React from 'react'
import Styles from './about.module.css'
import TitleWrapper from '../../Widgets/TitleWrapper/TitleWrapper'
import { Box, SimpleGrid, Text, Card, CardBody, Image, Stack, Heading, Divider} from '@chakra-ui/react'
import {List, ListItem, ListIcon, OrderedList, UnorderedList, } from '@chakra-ui/react'
import missionImage from './images/Photographer-holding-a-camera-lens-focusing-during-the-travel-768x247.jpg'
import vissionImage from './images/test-768x251.png'
import Team from './Team/Team'
import Partners from './Partners/Partners'

const About = () => {
    return (
        <>
            <TitleWrapper 
                bannerImage={'https://leisuretrips.co.in/wp-content/uploads/2020/11/breadcrumb-bg.jpg'} 
                mainTitle={'About Us'}
                subTitle={'Background information about Travellers Solution'}
            />
            <Box className={Styles.mainContainer}>
                <Text fontSize={'15px'} color={'gray'} lineHeight={'1.5'} mb={'10px'}>
                    Travellers Solution is a leading B2B consolidator company specializing in outbound tours, 
                    renowned for our expertise in premier destinations such as Europe, the UK, Scotland, 
                    Scandinavia, Georgia, and Armenia.
                </Text>
                <Text fontSize={'15px'} color={'gray'} lineHeight={'1.5'}>
                    Our core strength lies in our deep understanding and 
                    extensive knowledge of European travel, making us a distinguished player in the market of long-haul destinations. 
                </Text>
                <Box mt={'20px'}>
                    <SimpleGrid columns={2} spacing={10}>
                        <Box>
                            <Card maxW='100%'>
                                <CardBody>
                                    <Image src={missionImage} alt='' borderRadius='lg' />
                                    <Stack mt='6' spacing='3'>
                                        <Heading className={Styles.cardHeading}>Our Mission</Heading>
                                        <Text className={Styles.cardDescription}>
                                            Our mission is to deliver exceptional travel experiences that exceed our clients' expectations. We aim to: 
                                        </Text>
                                        <Box className={Styles.ulList}>
                                            <UnorderedList>
                                                <ListItem>Provide unparalleled expertise and insights into European destinations. </ListItem>
                                                <ListItem>Offer flexible and customized travel solutions to meet diverse client needs.</ListItem>
                                                <ListItem>Ensure a seamless and enjoyable travel experience through meticulous planning and execution. </ListItem>
                                                <ListItem>Build long-term relationships with our partners and clients based on trust and mutual success. </ListItem>
                                            </UnorderedList>
                                        </Box>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box>
                        <Card maxW='100%'>
                                <CardBody>
                                    <Image src={vissionImage} alt='' borderRadius='lg' />
                                    <Stack mt='6' spacing='3'>
                                        <Heading className={Styles.cardHeading}>Our Vision</Heading>
                                        <Text className={Styles.cardDescription}>
                                            Our vision is to become the top preferred vendor for European travel from the Indian market. 
                                        </Text>    
                                        <Text className={Styles.cardDescription}>
                                            We are committed to achieving the highest passenger travel numbers year after year by continuously enhancing 
                                            our service offerings and maintaining the highest standards of customer satisfaction.
                                        </Text>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </Box>
                    </SimpleGrid>
                </Box>
                <Text fontSize={'15px'} color={'gray'} lineHeight={'1.5'} mt={'40px'}>
                    By focusing on these principles, Travellers Solution strives to set new benchmarks in the travel industry and lead the market in outbound tours from India to Europe and beyond.
                </Text>
                <Box p={'20px 0'}>
                    <Heading className={Styles.cardHeading} textAlign={'center'}>Our Expertise</Heading>
                    <Text fontSize={'14px'} color={'gray'} lineHeight={'1.5'} mt={'20px'}>
                        Our specialization in European destinations allows us to offer unparalleled travel experiences tailored to various needs and preferences. We provide a diverse range of services, including: 
                    </Text>
                    <List spacing={3}>
                        <ListItem>
                        <Text className={Styles.listHeading}>Free Independent Travel (FIT):</Text>
                        <Text fontSize={'15px'} color={'gray'} lineHeight={'1.5'}>
                            Tailored travel plans for individuals or small groups seeking a personalized journey, free from the constraints of group tours.
                        </Text>
                        </ListItem>
                        <ListItem>
                        <Text className={Styles.listHeading}>Ad-hoc Tours:</Text>
                        <Text fontSize={'15px'} color={'gray'} lineHeight={'1.5'}>
                            Specially curated tours designed for groups with specific interests or needs, offering flexibility and customized itineraries.
                        </Text>
                        </ListItem>
                        <ListItem>
                        <Text className={Styles.listHeading}>Van Tours:</Text>
                        <Text fontSize={'15px'} color={'gray'} lineHeight={'1.5'}>
                            Small group tours that offer comfort, intimacy, and flexibility, allowing travelers to explore at a relaxed pace.
                        </Text>
                        </ListItem>
                        <ListItem>
                        <Text className={Styles.listHeading}>Self-drive Tours:</Text>
                        <Text fontSize={'15px'} color={'gray'} lineHeight={'1.5'}>
                            For those who enjoy independence, these tours provide the freedom to explore at your own pace, with carefully planned routes and accommodations to ensure a smooth, worry-free trip.
                        </Text>
                        </ListItem>
                    </List>
                </Box>
                <Team />
                <Partners />
            </Box>
        </>
    )
}

export default About