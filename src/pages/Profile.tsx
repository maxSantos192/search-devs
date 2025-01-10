import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Flex,
  Stack,
  StackDivider,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import Header from "../components/Header";
import CardProfile from "../components/CardProfile";
import CardRepository from "../components/CardRepository";
import NotFound from "../components/NotFound";
import { User, Repository } from "../utils/models";

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (userResponse.ok) {
          const userData = await userResponse.json();
          setUser(userData);
        }

        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (reposResponse.ok) {
          const reposData = await reposResponse.json();
          setRepos(reposData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <VStack h={"100vh"} bg={"layout"}>
      <Header name={user?.name} isMobile={isMobile} />
      {user ? (
        <Flex
          gap={isMobile ? 0 : 10}
          mt={isMobile ? 0 : 10}
          px={isMobile ? 0 : 5}
          direction={isMobile ? "column" : "row"}
          w={"full"}
          maxW={"1920px"}
          alignItems="flex-start"
        >
          <VStack spacing={10}>
            <CardProfile user={user} isMobile={isMobile} />
            <Button
              w={"full"}
              colorScheme="purple"
              display={isMobile ? "none" : "inline-block"}
            >
              Contato
            </Button>
          </VStack>
          <Card alignSelf={"start"} w={"full"}>
            <CardBody>
              <Stack divider={<StackDivider />} spacing={4}>
                {repos.map((repo) => (
                  <CardRepository key={repo.id} repo={repo} />
                ))}
              </Stack>
            </CardBody>
          </Card>
        </Flex>
      ) : (
        <NotFound />
      )}
    </VStack>
  );
}
export default Profile;
