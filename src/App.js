import {
  Box,
  Flex,
  FormControl,
  Select,
  Spacer,
  Text,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import MapComponent from "./components/MapComponent";
import Nav from "./components/Nav";
import VoteCount from "./components/VoteCount";
import React from "react";
function App() {
  const [electionData, setElectionData] = useState("");
  const [electionType, setElectionType] = useState("");
  const [electionYear, setElectionYear] = useState(2023);
  const [display, setdisplay] = React.useState(false);

  const electionDataOption = [
    "Pre-Election",
    "Election Day LiveUpdates",
    "Post-Election Analysis",
  ];
  const electionTypeOption = [
    "Presidential",
    "Gubernaorial",
    "Senate",
    "House of Representatives",
  ];
  const electionYearOption = [
    2023, 2019, 2015, 2011, 2007, 2003, 1999, 1995, 1991, 1987, 1983, 1979,
    1975, 1971, 1967, 1963, 1959,
  ];

  return (
    <Box bg="#252B46" px="8">
      <Box mb="5">
        <Nav />
      </Box>
      <Box
        display="flex"
        alignItems={["normal", "normal", "center", "center"]}
        gap="3"
        flexDirection={["column", "column", "row", "row"]}
      >
        <Text color="#fff" fontSize="2xl" as="b">
          Post Election Data
        </Text>
        <Text color="#fff" bg="#1B1F30" w="fit-content" fontSize="xs">
          PRESIDENTIAL / 2023
        </Text>
      </Box>
      <Flex my="6" display={["block", "block", "flex", "flex"]}>
        <Box>
          <Text color="#fff" fontSize="lg">
            Presidental Race
          </Text>
        </Box>
        <Spacer />
        <Box my={[3, 3, 0, 0]}>
          <Flex
            alignItems="center"
            px="2"
            onClick={() => setdisplay((prevState) => !prevState)}
            w={["99%", "99%", "260px", "260px"]}
            my={[2, 2, 0, 0]}
            h="45px"
            fontSize="14px"
            bg="#1C2031 "
            color="#C6C7CB"
            cursor="pointer"
            border="none"
            borderRadius="6px"
            display={["flex", "flex", "none", "none"]}
          >
            Apply Filters
            <Spacer />
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6 0H2.4C1.76369 0.000694557 1.15365 0.253774 0.703711 0.703711C0.253774 1.15365 0.000694557 1.76369 0 2.4V3.3375C0.000739108 3.66821 0.07014 3.99516 0.203808 4.29766C0.210648 4.31465 0.221144 4.32851 0.229104 4.34492C0.345396 4.60079 0.505856 4.83418 0.703128 5.03438L5.6 9.93125V15.2C5.60003 15.3364 5.6349 15.4705 5.70132 15.5895C5.76773 15.7086 5.86348 15.8088 5.97947 15.8805C6.09546 15.9522 6.22786 15.993 6.36408 15.9992C6.5003 16.0053 6.63583 15.9766 6.75782 15.9156L9.95782 14.3156C10.0907 14.2491 10.2024 14.147 10.2805 14.0206C10.3586 13.8942 10.4 13.7486 10.4 13.6V9.93125L15.2969 5.0344C15.494 4.8343 15.6544 4.60105 15.7707 4.34534C15.7788 4.32874 15.7894 4.31467 15.7963 4.29749C15.9299 3.99505 15.9993 3.66815 16 3.3375V2.4C15.9993 1.76369 15.7462 1.15365 15.2963 0.703711C14.8464 0.253774 14.2363 0.000694557 13.6 0ZM14.4 3.2H1.6V2.4C1.60014 2.18787 1.68447 1.98447 1.83447 1.83447C1.98447 1.68447 2.18787 1.60014 2.4 1.6H13.6C13.8121 1.60014 14.0155 1.68447 14.1655 1.83447C14.3155 1.98447 14.3999 2.18787 14.4 2.4V3.2Z"
                fill="#292E45"
              />
            </svg>
          </Flex>
          <Box
            display={[
              display ? "block" : "none",
              display ? "block" : "none",
              "block",
              "block",
            ]}
          >
            <FormControl gap="3" display={["block", "block", "flex", "flex"]}>
              <Select
                w={["99%", "99%", "260px", "260px"]}
                my={[2, 2, 0, 0]}
                fontSize="14px"
                bg="#1C2031 "
                color="#C6C7CB"
                cursor="pointer"
                border="none"
                borderRadius="6px"
                placeholder="Election Data"
                value={electionData}
                onChange={(e) => setElectionData(e.target.value)}
              >
                {electionDataOption.map((item, i) => (
                  <option
                    style={{
                      background: "#1C2031",
                    }}
                    key={i}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </Select>

              <Select
                w={["99%", "99%", "260px", "260px"]}
                my={[2, 2, 0, 0]}
                fontSize="14px"
                bg="#1C2031"
                color="#C6C7CB"
                cursor="pointer"
                borderRadius="6px"
                border="none"
                placeholder="Presidential"
                value={electionType}
                onChange={(e) => setElectionType(e.target.value)}
              >
                {electionTypeOption.map((item, i) => (
                  <option
                    style={{
                      background: "#1C2031",
                    }}
                    key={i}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </Select>

              <Select
                w={["99%", "99%", "260px", "260px"]}
                my={[2, 2, 0, 0]}
                fontSize="14px"
                bg="#1C2031"
                color="#C6C7CB"
                cursor="pointer"
                border="none"
                borderRadius="6px"
                value={electionYear}
                onChange={(e) => setElectionYear(e.target.value)}
              >
                {electionYearOption.map((item, i) => (
                  <option
                    style={{
                      background: "#1C2031",
                    }}
                    key={i}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Flex>
      <hr style={{ border: " 1px solid #393C4A" }} />
      <Box my="4">
        <MapComponent />
      </Box>
      <Box>
        <VoteCount />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
