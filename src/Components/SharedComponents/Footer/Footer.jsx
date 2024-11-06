import Styles from './Footer.module.css'
import { Box, Flex, Text, Button, Link, VStack, HStack, Icon, SimpleGrid, UnorderedList, ListItem } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTripadvisor, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <Box bg="#ffffff" p={8} color="gray.700" className={Styles.list} padding={'60px 0'}>
                <SimpleGrid minChildWidth='120px' spacing='40px'>
                    <Box>
                        <UnorderedList>
                            <Text fontWeight="bold">Get In touch</Text>
                            <ListItem><Text>+ (999) 999 9999</Text></ListItem>
                            <ListItem><Text>info@company.com</Text></ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <UnorderedList>
                            <ListItem><Link href="#">Terms and Conditions</Link></ListItem>
                            <ListItem><Link href="#">Privacy Policy</Link></ListItem>
                            <ListItem><Link href="#">Covid</Link></ListItem>
                            <ListItem><Link href="#">Careers</Link></ListItem>
                            <ListItem><Link href="#">Environmental Policy</Link></ListItem>
                            <ListItem><Link href="#">Contact us</Link></ListItem>
                        </UnorderedList>
                        
                    </Box>
                    <Box>
                        <UnorderedList>
                            <ListItem><Link href="#">About Us</Link></ListItem>
                            <ListItem><Link href="#">Our Values</Link></ListItem>
                            <ListItem><Link href="#">Our Team</Link></ListItem>
                            <ListItem><Link href="#">Blog</Link></ListItem>
                            <ListItem><Link href="#">Become an agent</Link></ListItem>
                            <ListItem><Link href="#">Agent login</Link></ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <Text fontWeight="bold" fontSize="lg">Become our partner agent</Text>
                        <Button colorScheme="red">Send request</Button>
                    </Box>
                </SimpleGrid>
            </Box>
            <Box className={Styles.bottomFooter} color={'#ffffff'}>
                GoSolo™ 2024 – All Rights Reserved
            </Box>
    
        </>
    );
}

export default Footer;
