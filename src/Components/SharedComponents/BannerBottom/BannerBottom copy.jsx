import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
import Slider from 'react-slick';

const BannerBottom = () => {
    // Carousel settings for react-slick
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        appendDots: (dots) => (
            <HStack justify="center" mt={4} spacing={2}>
                {dots}
            </HStack>
        ),
        customPaging: () => <Circle size="10px" bg="gray.500" />,
    };

    let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    document.getElementById("sliderWrapper").style.transform = `translateX(-${slideIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");
  }

  function currentSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
  }

  function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
  }

  // Auto slide
  setInterval(nextSlide, 3000);

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

                <Box mt={6} border="2px dashed white" borderRadius="lg" p={4} overflow="hidden" float={'right'} width={'50%'}>
                    <div class="slider">
                        <div class="slider-wrapper" id="sliderWrapper">
                            <div class="slide">
                                <img src="image1.jpg" alt="Slide 1" />
                            </div>
                            <div class="slide">
                                <img src="image2.jpg" alt="Slide 2" />
                            </div>
                            <div class="slide">
                                <img src="image3.jpg" alt="Slide 3" />
                            </div>
                        </div>
                        <div class="dots">
                            <span class="dot" onclick="currentSlide(0)"></span>
                            <span class="dot" onclick="currentSlide(1)"></span>
                            <span class="dot" onclick="currentSlide(2)"></span>
                        </div>
                    </div>

                    {/* <Slider {...settings}>
                        <Image
                            src="image1.jpg" // Replace with actual image URLs
                            alt="Himalayas 1"
                            boxSize="300px"
                            objectFit="cover"
                            borderRadius="lg"
                        />
                        <Image
                            src="image2.jpg" // Replace with actual image URLs
                            alt="Himalayas 2"
                            boxSize="300px"
                            objectFit="cover"
                            borderRadius="lg"
                        />
                        <Image
                            src="image3.jpg" // Replace with actual image URLs
                            alt="Himalayas 3"
                            boxSize="300px"
                            objectFit="cover"
                            borderRadius="lg"
                        />
                    </Slider> */}
                </Box>
            </Box>
        </Box>
    );
};

export default BannerBottom;
