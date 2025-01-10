import React from "react";
import {
  Card,
  CardBody,
  Flex,
  HStack,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { FaRegStar } from "react-icons/fa";

function CardRepository() {
  return (
    <Card alignSelf={"start"}>
      <CardBody>
        <Stack divider={<StackDivider />}>
          <Stack spacing={4}>
            <Text as={"b"} color={"black"} fontSize={"xl"}>
              Repositório nome
            </Text>
            <Flex>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus.
              </Text>
            </Flex>

            <HStack>
              <FaRegStar size={24} color={"slate"} />
              <Text fontSize={"sm"}>100</Text>
              <Text fontSize={"sm"}>Atualizado há 2 dias</Text>
            </HStack>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CardRepository;
