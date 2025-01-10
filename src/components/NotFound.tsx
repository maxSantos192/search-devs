import React from "react";
import { Button, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/");
  }

  return (
    <VStack justifyContent="center" alignItems="center" h="100%" px={5}>
      <Text fontSize={"4xl"} textAlign={"center"}>
        Ops! não encontramos o usuário que você está buscando.
      </Text>
      {isMobile && (
        <Button colorScheme="purple" w={"full"} onClick={handleNavigate}>
          Voltar
        </Button>
      )}
    </VStack>
  );
}

export default NotFound;
