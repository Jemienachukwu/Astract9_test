import React from "react";
import { Grid, GridItem, Text, Image, Flex } from "@chakra-ui/react";
import logo from "../Assets/Hernalytics Full Logo Yellow@3x 1.png";
import insta from "../Assets/instagramm.png";
import twitter from "../Assets/twitter.png";
import whatsapp from "../Assets/watsapp.png";

const Footer = () => {
  const images = [insta, twitter, whatsapp];
  return (
    <Grid
      templateColumns="repeat(7, 1fr)"
      gap={4}
      bg="rgba(255, 255, 255, 0.1)"
      p="12"
      color="#fff"
      fontSize="sm"
    >
      <GridItem colSpan={{ base: 7, lg: 7, xl: 3 }}>
        <Image src={logo} alt="logo" />

        <Text my="3">
          Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, Nigeria
        </Text>
        <Text>© 2022 Hernalytics</Text>
      </GridItem>
      <GridItem colSpan={{ base: 7, lg: 1, xl: 1 }}>
        <Text as="b" cursor="pointer" my="3">
          About
        </Text>
        <Text cursor="pointer" my="3">
          Our Story
        </Text>
        <Text cursor="pointer" my="3">
          Blog
        </Text>
        <Text cursor="pointer" my="3">
          About Hernalytics
        </Text>
        <Text cursor="pointer" my="3">
          Video
        </Text>
      </GridItem>
      <GridItem colSpan={{ base: 7, lg: 1, xl: 1 }}>
        <Text as="b" cursor="pointer" my="3">
          Support
        </Text>
        <Text cursor="pointer" my="3">
          FAQs
        </Text>
        <Text cursor="pointer" my="3">
          Privacy Policy
        </Text>
        <Text cursor="pointer" my="3">
          Terms of Service
        </Text>
      </GridItem>
      <GridItem colSpan={{ base: 7, lg: 1, xl: 2 }}>
        <Text as="b" cursor="pointer" my="3">
          Let's chat
        </Text>
        <Text my="3">hernalytics@gmail.com</Text>
        <Text my="3">+234 801 234 5678</Text>
        <Flex gap="3">
          {images.map((item, i) => (
            <Image key={i} src={item} alt="contact img" cursor="pointer" />
          ))}
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Footer;
