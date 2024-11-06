import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Link,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import Logo from './Logo/Logo';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust scroll threshold as needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      position="fixed"
      top="0"
      width="100%"
      zIndex="1000"
      bg={isScrolled ? 'white' : 'transparent'} // Changes color on scroll
      transition="background-color 0.3s ease"
      boxShadow={isScrolled ? 'lg' : 'none'}
    >
      <Flex h="77px" alignItems="center" justifyContent="space-between" px={4}>
        {/* Left - Logo Section */}
        <Box>
          <Link href="/" aria-label="Go to homepage">
            <Logo />
          </Link>
        </Box>

        {/* Middle - Menu Section */}
        <HStack as="nav" spacing={8} display={{ base: 'none', md: 'flex' }}>
          <Link href="/" aria-label="Home">Home</Link>
          <Link href="/about" aria-label="About">About</Link>
          <Link href="/services" aria-label="Services">Services</Link>
          <Link href="/contact" aria-label="Contact">Contact</Link>
        </HStack>

        {/* Right - Search and Buttons */}
        <Flex alignItems="center">
          {/* Search Bar */}
          <InputGroup display={{ base: 'none', md: 'flex' }} maxW="200px">
            <Input placeholder="Search" aria-label="Search" />
            <InputRightElement pointerEvents="none">
              <SearchIcon color="gray.500" />
            </InputRightElement>
          </InputGroup>

          {/* Right Side Buttons */}
          <HStack spacing={4} ml={6}>
            <Link href="/agentslogin" aria-label="Agents Login">Agents Login</Link>
          </HStack>
        </Flex>

        {/* Mobile Menu Icon */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }} animation="fadeIn 0.3s">
          <Stack as="nav" spacing={4}>
            <Link href="/" aria-label="Home">Home</Link>
            <Link href="/about" aria-label="About">About</Link>
            <Link href="/services" aria-label="Services">Services</Link>
            <Link href="/contact" aria-label="Contact">Contact</Link>
            <Link href="/agentslogin" aria-label="Agents Login">Agents Login</Link>
            <InputGroup maxW="100%">
              <Input placeholder="Search" aria-label="Search in mobile menu" />
              <InputRightElement pointerEvents="none">
                <SearchIcon color="gray.500" />
              </InputRightElement>
            </InputGroup>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Header;
