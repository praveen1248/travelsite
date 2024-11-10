import React, { useState } from "react";
import { Box, Heading, Text, Flex, Avatar, IconButton, Container, SimpleGrid } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

// Example testimonial data
const testimonials = [
  {
    name: "Alice Johnson",
    position: "CEO, ExampleCorp",
    text: "This service was outstanding and truly exceeded our expectations!",
    photo: "https://example.com/photo-alice.jpg",
  },
  {
    name: "Bob Smith",
    position: "CTO, Techies",
    text: "A game-changer for our business. Highly recommend!",
    photo: "https://example.com/photo-bob.jpg",
  },
  {
    name: "Sara Lee",
    position: "Marketing Head, BrandX",
    text: "An exceptional experience from start to finish. We're very satisfied!",
    photo: "https://example.com/photo-sara.jpg",
  },
  {
    name: "Tom Hardy",
    position: "Product Manager, XYZ Ltd",
    text: "Fantastic results and quick turnaround time. Would recommend to anyone.",
    photo: "https://example.com/photo-tom.jpg",
  },
];

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show two testimonials per view
  const itemsPerPage = 2;

  // Handlers for navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + itemsPerPage
    );
  };

  return (
    <Box py={10} bg="gray.50" m={'0 0 0px 0'}>
      <Heading mb={8} fontSize="2xl" color="teal.600" textAlign="center">
        What Our Clients Say
      </Heading>
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between">
          <IconButton
            icon={<ArrowBackIcon />}
            onClick={handlePrev}
            aria-label="Previous testimonials"
            colorScheme="teal"
            variant="outline"
          />
          <SimpleGrid columns={2} spacing={8} w="full" maxW="4xl" mx={4}>
            {testimonials.slice(currentIndex, currentIndex + itemsPerPage).map((testimonial, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={6}
                shadow="md"
                bg="white"
              >
                <Flex align="center" mb={4}>
                  <Avatar src={testimonial.photo} name={testimonial.name} mr={4} size="lg" />
                  <Box textAlign="left">
                    <Text fontWeight="bold" fontSize="xl">{testimonial.name}</Text>
                    <Text fontSize="sm" color="gray.600">
                      {testimonial.position}
                    </Text>
                  </Box>
                </Flex>
                <Text fontSize="md" color="gray.700">
                  "{testimonial.text}"
                </Text>
              </Box>
            ))}
          </SimpleGrid>
          <IconButton
            icon={<ArrowForwardIcon />}
            onClick={handleNext}
            aria-label="Next testimonials"
            colorScheme="teal"
            variant="outline"
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default ClientTestimonials;
