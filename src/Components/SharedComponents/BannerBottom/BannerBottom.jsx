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
                            The Himalayas
                        </Text>
                        <Box h="2px" w="40%" bg="white" />
                        <Text fontSize="lg">
                            The Himalayas, or Himalaya, is a mountain range in Asia, separating the plains of the Indian
                            subcontinent from the Tibetan Plateau. The range has some of the planet's highest peaks,
                            including the very highest, Mount Everest. Over 100 peaks exceeding 7,200 m in elevation lie
                            in the Himalayas.
                        </Text>
                        <Button variant="outline" colorScheme="whiteAlpha">
                            Learn More
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
                        {/* <div className="dots" style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex' }}>
                            {slides.map((_, index) => (
                                <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => showSlide(index)}
                                style={{
                                    height: '10px',
                                    width: '10px',
                                    margin: '0 5px',
                                    backgroundColor: '#bbb',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s ease'
                                }}
                                ></span>
                            ))}
                        </div> */}
                    </div>
                </div>
            </Box>
        </Box>
    );
};

export default BannerBottom;
