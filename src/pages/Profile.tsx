import React from "react";
import { Flex, VStack } from "@chakra-ui/react";
import Header from "../components/Header";
import CardProfile from "../components/CardProfile";
import CardRepository from "../components/CardRepository";

function Profile() {
  return (
    <VStack h={"100vh"} bg={"layout"}>
      <Header />
      <Flex gap={10} mt={10} px={5}>
        <CardProfile />
        <CardRepository />
      </Flex>
    </VStack>
  );
}
export default Profile;
