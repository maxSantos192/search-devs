import React from "react";
import {
  Box,
  Flex,
  Text,
  Avatar,
  HStack,
  Card,
  CardBody,
  Stack,
  Link,
} from "@chakra-ui/react";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GrLocation } from "react-icons/gr";
import { FaRegBuilding, FaLink, FaRegHeart } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { LuTwitter } from "react-icons/lu";
import { User } from "../utils/models";

interface CardProfileProps {
  user: User;
}

function CardProfile({ user }: CardProfileProps) {
  return (
    <Card minW={"280px"}>
      <CardBody>
        <Stack spacing={8}>
          <Flex>
            <Avatar src={user.avatar_url} />
            <Box ml="5">
              <Text fontWeight="bold" fontSize={"xl"}>
                {user.name}
              </Text>
              <Text fontSize="sm" color={"#A0AEC0"}>
                @{user.login}
              </Text>
            </Box>
          </Flex>

          {user.bio && (
            <Flex>
              <Text>{user.bio}</Text>
            </Flex>
          )}

          <Stack>
            <HStack>
              <HiOutlineUserGroup size={22} color="slate" />
              <Text>
                {user.followers}{" "}
                {user.followers > 1 ? "seguidores" : "seguidor"}
              </Text>
            </HStack>
            <HStack>
              <FaRegHeart size={22} color="slate" />
              <Text>{user.following} seguindo</Text>
            </HStack>
          </Stack>

          <Stack>
            {user.company && (
              <HStack>
                <FaRegBuilding size={22} color="slate" />
                <Text>{user.company}</Text>
              </HStack>
            )}
            {user.location && (
              <HStack>
                <GrLocation size={22} color="slate" />
                <Text>{user.location}</Text>
              </HStack>
            )}
            {user.email && (
              <HStack>
                <MdOutlineEmail size={22} color="slate" />
                <Text>{user.email}</Text>
              </HStack>
            )}
            {user.blog && (
              <HStack>
                <FaLink size={22} color="slate" />
                <Link href={user.blog}>{user.blog}</Link>
              </HStack>
            )}
            {user.twitter_username && (
              <HStack>
                <LuTwitter size={22} color="slate" />
                <Link href={`https://x.com/${user.twitter_username}`}>
                  @{user.twitter_username}
                </Link>
              </HStack>
            )}
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CardProfile;
