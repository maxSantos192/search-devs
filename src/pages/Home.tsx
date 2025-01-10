import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!username.trim()) {
      alert("Please enter a username to search for.");
      return;
    }
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        alert("User not found.");
        return;
      }
      navigate(`/profile/${username}`);
    } catch (err) {
      console.error(err);
    }
  }

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

        <form onSubmit={handleSearch}>
          <Flex gap={6}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <CiSearch size={20} color="slate" />
              </InputLeftElement>
              <Input
                placeholder="Search"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputGroup>
            <Button colorScheme="purple" w={48} type="submit">
              Search
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
}

export default Home;
