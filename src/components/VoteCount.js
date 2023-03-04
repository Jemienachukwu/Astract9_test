import React from "react";
import { Box, Flex, Image, Spacer, Text, Container } from "@chakra-ui/react";
import CanvasJSReact from "../Assets/canvasjs.react";
import mimiMap from "../Assets/ng 1.svg";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const VoteCount = () => {
  const options = {
    animationEnabled: true,
    backgroundColor: "#1C2031",
    scaleBreaks: {
      autoCalculate: true,
    },
    subtitles: [
      {
        text: "TOTAL VOTES 168,912,222",
        verticalAlign: "center",
        fontSize: 18,
        fontWeight: "light",
        fontColor: "#fff",
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: "doughnut",
        radius: "69%",
        indexLabel: "{name}",
        indexLabelFontColor: "#fff",
        indexLabelFontWeight: "light",
        indexLabelFontSize: "10",
        dataPoints: [
          {
            name: "REJECTED VOTES 8,400,000",
            y: 20,
            color: "#E30325",
          },
          {
            name: "ACCEPTED VOTES 160,512,222",
            y: 80,
            color: "#449352",
          },
        ],
      },
    ],
  };
  const geopoliticalZones = [
    { color: "#449352", area: "North East", vote: "3,000" },
    { color: "#6D769D", area: "North West", vote: "3,000" },
    { color: "#A163BE", area: "North Central", vote: "3,000" },
    { color: "#E30325", area: "South East", vote: "3,000" },
    { color: "#2249D1", area: "South South", vote: "3,000" },
    { color: "#018796", area: "South East", vote: "3,000" },
  ];
  return (
    <Flex
      bg="#1C2031"
      borderRadius="12px"
      border="1px solid #393C4A"
      gap="2"
      p="9"
      alignItems="center"
      wrap={["wrap", "wrap", "nowrap", "nowrap"]}
      justifyContent="center"
    >
      <Container>
        <CanvasJSChart options={options} style={{ border: "1px solid gold" }} />
      </Container>
      <Spacer />
      <Box
        borderRadius="12px"
        border={["none", "none", "none", "1px solid #393C4A"]}
        h="339px"
        w="fitContent"
        py="4"
        mb={[20, 20, 0, 0]}
      >
        <Text color="#fff">CANDIDATES BY GEOPOLITICAL ZONES</Text>
        <Flex
          alignItems="center"
          justifyContent="center"
          gap="5"
          mt="5"
          wrap={["wrap", "wrap", "wrap", "nowrap"]}
        >
          <Image src={mimiMap} alt="mimi map" boxSize="150px" />
          <Box color="#fff" fontSize="sm">
            {geopoliticalZones.map((item, i) => (
              <Flex alignItems="center" key={i} gap="2">
                <Box w="22px" h="14px" borderRadius="2px" bg={item.color}></Box>{" "}
                <Text>{item.area}</Text>
                <Text>{item.vote}</Text>
              </Flex>
            ))}
          </Box>
        </Flex>
      </Box>
      <Flex
        color="#fff"
        mt={[20, 20, 0, 0]}
        border={["none", "none", "1px solid #393C4A", "1px solid #393C4A"]}
        borderRadius="12px"
        h="339px"
        alignItems={["none", "none", "center", "center"]}
      >
        <Box p="4">
          <Box>
            <Text fontWeight="light">TOTAL ELECTED MEMBERS</Text>
            <Text as="b">10,000</Text>
          </Box>
          <Box my="4">
            <Flex alignItems="center" gap="1">
              <Text fontWeight="light">MALE </Text>
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 0.933876C12.9999 0.825588 12.9823 0.718148 12.948 0.616358C12.9113 0.530313 12.8615 0.451425 12.8008 0.382889C12.782 0.356363 12.7585 0.334142 12.7316 0.317518C12.6819 0.262701 12.6232 0.218362 12.5584 0.186775H12.4718C12.3734 0.09835 12.2581 0.0345599 12.1341 0H8.67056C8.44091 0 8.22067 0.0983904 8.05828 0.273526C7.8959 0.448662 7.80467 0.686196 7.80467 0.933876C7.80467 1.18155 7.8959 1.41909 8.05828 1.59423C8.22067 1.76936 8.44091 1.86775 8.67056 1.86775H9.98671L8.14237 3.7822C7.06981 2.98543 5.75891 2.65219 4.46933 2.84847C3.17975 3.04476 2.00555 3.75625 1.17933 4.84202C0.353113 5.9278 -0.0648678 7.30865 0.00818582 8.71105C0.0812394 10.1135 0.639998 11.4351 1.57378 12.4142C2.50757 13.3934 3.74827 13.9585 5.05012 13.9978C6.35197 14.0371 7.62001 13.5476 8.60307 12.6262C9.58613 11.7049 10.2125 10.419 10.3581 9.02319C10.5037 7.62738 10.1579 6.22349 9.38925 5.08962L11.2682 3.12848V4.66938C11.2682 4.91706 11.3595 5.15459 11.5218 5.32973C11.6842 5.50486 11.9045 5.60325 12.1341 5.60325C12.3638 5.60325 12.584 5.50486 12.7464 5.32973C12.9088 5.15459 13 4.91706 13 4.66938V0.933876ZM5.20701 12.1404C4.52198 12.1404 3.85234 11.9213 3.28276 11.5108C2.71318 11.1004 2.26925 10.517 2.0071 9.83439C1.74495 9.15182 1.67636 8.40074 1.81 7.67612C1.94364 6.9515 2.27352 6.2859 2.7579 5.76348C3.24229 5.24106 3.85944 4.88529 4.5313 4.74115C5.20316 4.59702 5.89957 4.67099 6.53245 4.95373C7.16533 5.23646 7.70626 5.71525 8.08684 6.32955C8.46742 6.94385 8.67056 7.66607 8.67056 8.40488C8.67056 9.3956 8.30565 10.3457 7.65611 11.0463C7.00656 11.7468 6.1256 12.1404 5.20701 12.1404Z"
                  fill="#E5B805"
                />
              </svg>
            </Flex>
            <Text as="b">9,000</Text>
          </Box>
          <Box>
            <Flex alignItems="center" gap="1">
              <Text fontWeight="light">FEMALE</Text>

              <svg
                width="9"
                height="13"
                viewBox="0 0 9 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.50662 7.7805C4.08492 7.78172 3.66717 7.69848 3.27745 7.5356C2.88774 7.37272 2.53379 7.13342 2.23603 6.8315C0.214226 4.78985 1.66517 1.29675 4.50662 1.29675C7.34614 1.29675 8.80093 4.7879 6.77785 6.8315C6.48 7.13349 6.12595 7.37284 5.73612 7.53573C5.34629 7.69861 4.92842 7.7818 4.50662 7.7805ZM7.67657 7.748C10.518 4.87955 8.47114 0 4.50469 0C0.547229 0 -1.52407 4.87955 1.31866 7.748C2.03224 8.4695 3.20418 8.892 3.8464 9.0259V10.4065H1.91974V11.7032H3.8464V13H5.13083V11.7032H7.05749V10.4065H5.13083V9.0259C6.41527 8.89135 6.96299 8.4682 7.67657 7.748Z"
                  fill="#E5B805"
                />
              </svg>
            </Flex>

            <Text as="b">1,000</Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default VoteCount;
