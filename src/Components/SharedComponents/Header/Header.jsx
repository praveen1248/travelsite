import React from 'react';
import { Box, Flex, HStack, IconButton, Button, useDisclosure, Stack, Image, Link, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box 
      bg="white" 
      px={4} 
      boxShadow="lg" 
      bgGradient="linear(b-to, white, gray.100)" // Add a slight gradient for a glossy effect
      borderBottom="1px solid rgba(0, 0, 0, 0.1)" // Border at the bottom for a clean look
    >
      <Flex h={"77px"} alignItems="center" justifyContent="space-between">
        
        {/* Left - Logo Section */}
        <Box>
          <Link href="/">
            <Image src="http://www.theme-oxygen.com/envato/travego/preview/images/logo.jpg" alt="Logo" maxH={'49px'} />
          </Link>
        </Box>

        {/* Middle - Menu Section */}
        <HStack as="nav" spacing={8} display={{ base: 'none', md: 'flex' }}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Services</Link>
          <Link href="/">Contact</Link>
        </HStack>

        {/* Right - Search and Buttons */}
        <Flex alignItems="center">
          {/* Search Bar */}
          <InputGroup display={{ base: 'none', md: 'flex' }} maxW="200px">
            <Input placeholder="Search" />
            <InputRightElement pointerEvents="none">
              <SearchIcon color="gray.500" />
            </InputRightElement>
          </InputGroup>

          {/* Right Side Buttons */}
          <HStack spacing={4} ml={6}>
            <Link href="/agentslogin">Agents Login</Link>
            {/* <Button variant="link" href="/agents">Agents</Button>
            <Button colorScheme="teal" variant="outline">Login</Button> */}
          </HStack>
        </Flex>

        {/* Mobile Menu Icon */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Services</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Agents Login</Link>
            <InputGroup maxW="100%">
              <Input placeholder="Search" />
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
