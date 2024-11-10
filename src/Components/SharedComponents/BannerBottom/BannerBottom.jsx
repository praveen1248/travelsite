import React,{useEffect, useState} from 'react';
import Styles from './bannerbottom.module.css';
import {
    Box,
    VStack,
    Text,
    Button,
    Image,
    Circle,
    HStack,
} from '@chakra-ui/react';
import Image1 from './assets/images/679a859e2ec33abf2a200f3b84fcd023.jpg'
import Image2 from './assets/images/8e2d0ebc62f9bc8c1254bb213363ab25.jpg'

const BannerBottom = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { src: Image1, alt: 'Slide 1' },
        { src: Image2, alt: 'Slide 2' },
    ];

    const showSlide = (index) => {
        if (index < 0) {
          setCurrentIndex(slides.length - 1);
        } else if (index >= slides.length) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(index);
        }
    };
    
    useEffect(() => {
        const interval = setInterval(() => {
          showSlide(currentIndex + 1);
        }, 3000);
        
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [currentIndex]);

    return (
        <Box className={Styles.Container} bg="black" color="white" p={8}>
            <Box className={Styles.ContainerMiddle}>
                <Box float={'left'} width={'50%'}>
                    <VStack align="start" spacing={4} maxW="lg">
                        <Text fontSize="4xl" fontWeight="bold">
                            Company Overview
                        </Text>
                        <Box h="2px" w="40%" bg="white" />
                        <Text lineHeight={'1.8'} fontSize={'17px'}>
                            Travellers Solution is a leading B2B consolidator company specializing in outbound tours, 
                            renowned for our expertise in premier destinations such as Europe, the UK, Scotland, Scandinavia, Georgia, and Armenia. 
                            Our core strength lies in our deep understanding and extensive knowledge of European travel, 
                            making us a distinguished player in the market of long-haul destinations.
                        </Text>
                        <Button variant="outline" colorScheme="white">
                            Explore Tours
                        </Button>
                    </VStack>
                </Box>
                <div style={{ marginTop: '24px', border: '2px dashed white', borderRadius: '8px', padding: '16px', overflow: 'hidden', float: 'right', width: '50%' }}>
                    <div className="slider">
                        <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease' }}>
                        {slides.map((slide, index) => (
                            <div className="slide" key={index} style={{ minWidth: '100%', height: '100%' }}>
                                <img src={slide.src} alt={slide.alt} style={{ width: '100%', height: '300px' }} />
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    );
};

export default BannerBottom;
