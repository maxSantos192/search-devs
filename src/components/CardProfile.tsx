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
} from "@chakra-ui/react";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GrLocation } from "react-icons/gr";
import { FaRegBuilding, FaLink, FaRegHeart } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { LuTwitter } from "react-icons/lu";
import avatar from "../assets/avatar.jpg";

function CardProfile() {
  return (
    <Card maxW={"280px"}>
      <CardBody>
        <Stack spacing={8}>
          <Flex>
            <Avatar src={avatar} />
            <Box ml="5">
              <Text fontWeight="bold" fontSize={"xl"}>
                Diego Silva
              </Text>
              <Text fontSize="sm" color={"#A0AEC0"}>
                @diego.ssilva
              </Text>
            </Box>
          </Flex>

          <Flex>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </Text>
          </Flex>

          <Stack>
            <HStack>
              <HiOutlineUserGroup size={22} color="slate" />
              <Text>240 seguidores</Text>
            </HStack>
            <HStack>
              <FaRegHeart size={22} color="slate" />
              <Text>24 seguindo</Text>
            </HStack>
          </Stack>

          <Stack>
            <HStack>
              <FaRegBuilding size={22} color="slate" />
              <Text>Petize</Text>
            </HStack>
            <HStack>
              <GrLocation size={22} color="slate" />
              <Text>São Paulo</Text>
            </HStack>
            <HStack>
              <MdOutlineEmail size={22} color="slate" />
              <Text>diego@petize.com.br</Text>
            </HStack>
            <HStack>
              <FaLink size={22} color="slate" />
              <Text>www.diegosilva.com.br</Text>
            </HStack>
            <HStack>
              <LuTwitter size={22} color="slate" />
              <Text>@diegosilva</Text>
            </HStack>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CardProfile;
