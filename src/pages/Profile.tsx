import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  Flex,
  Stack,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import Header from "../components/Header";
import CardProfile from "../components/CardProfile";
import CardRepository from "../components/CardRepository";
import NotFound from "../components/NotFound";
import { UserProps } from "../types/user";
import { RepositoryProps } from "../types/repository";

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState<UserProps | null>(null);
  const [repos, setRepos] = useState<RepositoryProps[]>([]);

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
      <Header name={user?.name} />
      {user ? (
        <Flex
          gap={10}
          mt={10}
          px={5}
          w={"full"}
          maxW={"1920px"}
          alignItems="flex-start"
        >
          <CardProfile user={user} />
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
