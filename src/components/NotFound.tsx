import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function NotFound() {
  return (
    <Flex justifyContent="center" alignItems="center" h="100%">
      <Text fontSize={"4xl"} textAlign={"center"}>
        Ops! não encontramos o usuario que você está buscando.
      </Text>
    </Flex>
  );
}

export default NotFound;
