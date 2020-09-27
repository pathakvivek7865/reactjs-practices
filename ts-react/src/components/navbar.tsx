import React, { ReactNode, Props } from "react";
import {
  Box,
  Heading,
  Flex,
  Link,
  useColorMode,
  IconButton,
} from "@chakra-ui/core";

interface Iprops {
  children: ReactNode;
}

const MenuItems = ({ children }: Iprops) => (
  <Link mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Link>
);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="gray.900"
      color="teal.300"
      borderBottom="1px solid black"
      //   {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Chakra UI & React
        </Heading>
      </Flex>

      <Box
        display="flex"
        width="auto"
        alignItems="center"
        flexGrow={1}
        color="teal.300"
      >
        <MenuItems>Home</MenuItems>
        <MenuItems>Blogs</MenuItems>
        <MenuItems>About</MenuItems>
        <MenuItems>Contact</MenuItems>
      </Box>
      <Box display="block" mt={{ base: 4, md: 0 }}>
        <IconButton
          bg="transparent"
          aria-label="toggle color mode"
          icon={colorMode === "light" ? "moon" : "sun"}
          onClick={toggleColorMode}
          color="white"
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
