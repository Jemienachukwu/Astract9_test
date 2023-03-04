import {
  Box,
  Button,
  Flex,
  Image,
  Spacer,
  Text,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import logo from "../Assets/Hernalytics Full Logo Yellow@3x 1.png";
import Ham from "../Assets/menu-line.svg";
import { AiOutlineClose } from "react-icons/ai";
const Nav = () => {
  const [display, setdisplay] = React.useState(false);
  return (
    <Flex alignItems="center">
      <Box p="4" cursor="pointer">
        <Image src={logo} alt="img" />
      </Box>
      <Spacer />

      <Box display={["none", "none", "none", "flex"]} alignItems="center">
        <Box p="4" cursor="pointer" color="#fff">
          <Text fontSize="sm">About us</Text>
        </Box>
        <Spacer />
        <Flex alignItems="center" gap="2" p="4" cursor="pointer" color="#fff">
          <Text fontSize="sm">OUR COMMUNITIES</Text>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0.5L5 5.5L10 0.5H0Z" fill="white" />
          </svg>
        </Flex>
        <Spacer />
        <Flex alignItems="center" gap="2" p="4" cursor="pointer" color="#fff">
          <Text fontSize="sm">ELECTION DATA</Text>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0.5L5 5.5L10 0.5H0Z" fill="white" />
          </svg>
        </Flex>
        <Spacer />
        <Box p="4" cursor="pointer" color="#fff">
          <Text fontSize="sm">E-BUDDY</Text>
        </Box>
        <Spacer />
        <Box p="4" cursor="pointer" color="#fff">
          <Text fontSize="sm">E-BUDDY</Text>
        </Box>
        <Spacer />
        <Box p="4" cursor="pointer" color="#fff">
          <Text fontSize="sm">VEO PLATFORM</Text>
        </Box>
        <Spacer />
        <Box p="4" cursor="pointer" color="#fff">
          <Text fontSize="sm">LOGIN</Text>
        </Box>
        <Spacer />
        <Box p="4" cursor="pointer" color="#fff">
          <Button bg="#E5B805">SIGNUP</Button>
        </Box>
      </Box>
      <Box onClick={() => setdisplay((prevState) => !prevState)}>
        <Image
          src={Ham}
          alt="menu"
          display={["block", "block", "block", "none"]}
        />
      </Box>
      <Flex
        w="100vw"
        display={display ? "block" : "none"}
        bgColor="#252B46"
        zIndex={20}
        // h="200px"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        {" "}
        <Flex>
          <Spacer />
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            bg="#1C2031"
            color="#fff"
            onClick={() => setdisplay((prevState) => !prevState)}
          >
            <AiOutlineClose />
          </IconButton>
        </Flex>
        <Flex direction="column" px="4">
          <Spacer />
          <Box p="4" cursor="pointer" color="#fff">
            <Text fontSize="sm">E-BUDDY</Text>
          </Box>
          <Spacer />
          <Box p="4" cursor="pointer" color="#fff">
            <Text fontSize="sm">E-BUDDY</Text>
          </Box>
          <Spacer />
          <Box p="4" cursor="pointer" color="#fff">
            <Text fontSize="sm">VEO PLATFORM</Text>
          </Box>
          <Spacer />
          <Box p="4" cursor="pointer" color="#fff">
            <Text fontSize="sm">LOGIN</Text>
          </Box>
          <Spacer />
          <Box p="4" cursor="pointer" color="#fff">
            <Button bg="#E5B805">SIGNUP</Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Nav;
