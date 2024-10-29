import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Styles from './Styles.module.css';
import Banner from './images/banner-1.png';
import MiddleBanner from './images/banner-2.png';
import scrollBanner from './images/shape-1.png';

const HomepageBanner = () => {
  return (
    <Box 
      className={Styles.bannerContainer} 
      position="relative" 
      width="100%" 
      height="100vh"  // Full viewport height
      backgroundImage={`url(${Banner})`} 
      backgroundSize="cover" 
      backgroundPosition="center"
    >
      {/* Centered Text Content */}
      <Box 
        position="absolute" 
        top="30%"  // Adjust to position the text vertically
        width="100%" 
        textAlign="center" 
        color="white" 
        px={4}
      >
        <Heading as={'h2'} className={Styles.liveHeading}>
          <Box m={'auto'} width={'100%'} maxW={'500px'} letterSpacing={'36px'}>
            <Box float={'left'} fontSize={'135px'}>
              AL
            </Box>
            <Box float={'right'} fontSize={'135px'} position={'relative'} left={'60px'}>
              VE
            </Box>
            <Box className='clearfix'> </Box>
          </Box>
           
        </Heading>
        {/* <Text fontSize="4xl" fontWeight="bold">Welcome to Our Website</Text>
        <Text fontSize="xl">We create amazing experiences for you</Text> */}
      </Box>

      {/* Centered MiddleBanner Image with maxWidth and margin */}
      <Box 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        height="100%"
      >
        <Image 
          src={MiddleBanner} 
          alt="Middle Banner" 
          maxWidth="50%"     // Max width of 50%
          objectFit="contain"
          marginTop="100px"  // Adjust margin to move it downward
        />
      </Box>

      {/* Scroll Indicator */}
      <Box 
        position="absolute" 
        bottom="20px" 
        width="100%" 
        textAlign="center"
      >
        <Image 
          src={scrollBanner} 
          alt="Scroll indicator" 
          width="50px" 
          height="50px" 
          cursor="pointer"
        />
      </Box>
    </Box>
  );
};

export default HomepageBanner;
