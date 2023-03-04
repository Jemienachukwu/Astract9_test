import { Box, Center, Flex, Image, Spacer } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

import map from "../Assets/Frame.svg";
const MapComponent = () => {
  const [height, setHeight] = useState("700px");
  const [width, setWidth] = useState("850px");
  const imgRef = useRef(null);

  function handleZoomIn() {
    const newHeight = imgRef.current.clientHeight + 10;
    const newWidth = imgRef.current.clientWidth + 10;

    setHeight(newHeight);
    setWidth(newWidth);
  }

  function handleZoomOut() {
    const newHeight = imgRef.current.clientHeight - 30;
    const newWidth = imgRef.current.clientWidth - 30;

    setHeight(newHeight);
    setWidth(newWidth);
    // setHeight(initialHeight);
    // setWidth(initialWidth);
  }

  return (
    <Flex bg="#1C2031" borderRadius="12px">
      <Image
        src={map}
        w={["79%", "300px", width, width]}
        h={["280px", "500px", height, height]}
        ref={imgRef}
      />
      <Spacer />
      <Flex flexDirection="column">
        <Box m="10">
          <Box
            h={["28px", "28px", "30px", "38px"]}
            w={["28px", "28px", "30px", "38px"]}
            bg="#fff"
            textAlign="center"
            my="1"
            borderTopLeftRadius="4px"
            borderTopRightRadius="4px"
            cursor="pointer"
            onClick={handleZoomIn}
          >
            +
          </Box>
          <Box
            h={["28px", "28px", "30px", "38px"]}
            w={["28px", "28px", "30px", "38px"]}
            bg="#fff"
            textAlign="center"
            my="1"
            borderBottomLeftRadius="4px"
            cursor="pointer"
            borderBottomRightRadius="4px"
            onClick={handleZoomOut}
          >
            -
          </Box>
        </Box>
        <Spacer />
        <Box color="#57656B">
          <Flex my="2" gap="2">
            <Box bg="#64CCFF" h="24px" w="32px"></Box> APC
          </Flex>
          <Flex my="2" gap="2">
            <Box bg="#0AA83F" h="24px" w="32px"></Box> LP
          </Flex>
          <Flex my="2" gap="2">
            <Box bg="#D62B3C" h="24px" w="32px"></Box> PDP
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default MapComponent;
