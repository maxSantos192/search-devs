import React from "react";
import {
  Flex,
  Box,
  Input,
  Button,
  Text,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

function Home() {
  return (
    <Flex justifyContent="center" alignItems="center" h="100vh" bg={"layout"}>
      <Flex direction="column" w="100%" maxW="800px" p={4} gap={12}>
        <Flex justifyContent="center" alignItems="center" gap={6}>
          <Text fontSize={{ base: 50, md: 80 }} textAlign={"center"}>
            <Box as="span" color="blue">
              Search
            </Box>{" "}
            <Box as="span" color="purple.500">
              d_evs
            </Box>
          </Text>
        </Flex>

        <Flex gap={6}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CiSearch size={20} color="slate" />
            </InputLeftElement>
            <Input placeholder="Search" />
          </InputGroup>
          <Button colorScheme="purple" w={48}>
            Search
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
