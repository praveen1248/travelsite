import { Button, HStack, Center, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function CallToAction() {
    const navigate = useNavigate();
    return (
        <Box
            bgColor="#f9f9f9"
            bgRepeat="no-repeat"
            bgSize="contain"
            bgPosition="center"
            py={16}
            px={8}
        >
            <Center>
                <HStack spacing={6}>
                    <Button
                        colorScheme="whiteAlpha"
                        bg="teal.600"
                        _hover={{ bg: "teal.700" }}
                        color="white"
                        size="lg"
                        onClick={() => navigate('/book-tour')}
                    >
                        Book a Tour
                    </Button>
                    <Button
                        colorScheme="whiteAlpha"
                        bg="blue.600"
                        _hover={{ bg: "blue.700" }}
                        color="white"
                        variant="solid"
                        size="lg"
                        onClick={() => navigate('/contact')}
                    >
                        Contact Us
                    </Button>
                </HStack>
            </Center>
        </Box>
    );
}

export default CallToAction;
