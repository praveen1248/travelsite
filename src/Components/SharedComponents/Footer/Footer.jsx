import Styles from './Footer.module.css'
import { Link } from 'react-router-dom';
import { Box, Flex, Text, Button, VStack, IconButton, HStack, Icon, SimpleGrid, UnorderedList, ListItem, Heading } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
function Footer() {
    return (
        <>
            <Box className={Styles.footer}>
                <Box className={Styles.footerInner}>
                    <SimpleGrid minChildWidth='120px' spacing='40px'>
                        <Box>
                            <Heading className={Styles.footerHeading}>
                                Get In touch
                            </Heading>
                            <Box className={Styles.headingBorder}></Box>
                            <Box>
                                <Text color={'#bdbdbd'}>
                                    <Link href="tel:+99999999999">+ (999) 999 9999</Link>
                                </Text>
                                <Text color={'#bdbdbd'}>
                                    <Link href="mailto:info@company.com">info@company.com</Link>
                                </Text>
                            </Box>
                        </Box>
                        <Box>
                            <Heading className={Styles.footerHeading}>
                                Company
                            </Heading>
                            <Box className={Styles.headingBorder}></Box>
                            <Box>
                                <UnorderedList color={'#bdbdbd'} className={Styles.Ul}>
                                    <ListItem><Link to="#">Terms and Conditions</Link></ListItem>
                                    <ListItem><Link to="#">Privacy Policy</Link></ListItem>
                                    <ListItem><Link to="#">Covid</Link></ListItem>
                                    <ListItem><Link to="#">Careers</Link></ListItem>
                                    <ListItem><Link to="#">Environmental Policy</Link></ListItem>
                                    <ListItem><Link to="#">Contact us</Link></ListItem>
                                </UnorderedList>
                            </Box>
                        </Box>
                        <Box>
                            <Heading className={Styles.footerHeading}>
                                Our Branches
                            </Heading>
                            <Box className={Styles.headingBorder}></Box>
                            <SimpleGrid minChildWidth='120px' spacing='0px'>
                                <Box>
                                    <UnorderedList color={'#bdbdbd'} className={Styles.Ul}>
                                        <ListItem><Link to="#">Mumbai</Link></ListItem>
                                        <ListItem><Link to="#">Hyderabad</Link></ListItem>
                                        <ListItem><Link to="#">Bangalore</Link></ListItem>
                                        <ListItem><Link to="#">Chennai</Link></ListItem>
                                        <ListItem><Link to="#">Coimbatore</Link></ListItem>
                                        <ListItem><Link to="#">Erode</Link></ListItem>
                                        <ListItem><Link to="#">Madurai</Link></ListItem>
                                    </UnorderedList>
                                </Box>
                                <Box>
                                    <UnorderedList color={'#bdbdbd'} className={Styles.Ul}>
                                        <ListItem><Link to="#">Trichy</Link></ListItem>
                                        <ListItem><Link to="#">Salem</Link></ListItem>
                                        <ListItem><Link to="#">Kochi</Link></ListItem>
                                        <ListItem><Link to="#">Vellore</Link></ListItem>
                                        <ListItem><Link to="#">Pondicherry</Link></ListItem>
                                        <ListItem><Link to="#">Nagercoil</Link></ListItem>
                                        <ListItem><Link to="#">Kanyakumari</Link></ListItem>
                                    </UnorderedList>
                                </Box>
                            </SimpleGrid>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
            <Box className={Styles.footerBottom}>
                <Box className={Styles.footerBottomInner}>
                    <SimpleGrid minChildWidth='120px' spacing='40px'>
                        <Box textAlign={'left'} fontSize={'13px'}> Copyright © 2024 by Travellers Solution Pvt Ltd. All Rights Reserved. </Box>
                        <Box textAlign={'right'} fontSize={'13px'}>
                            
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
        </>
    );
}

export default Footer;
