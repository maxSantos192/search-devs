import React from "react";
import { Flex, HStack, Stack, Text, Link } from "@chakra-ui/react";
import { FaRegStar } from "react-icons/fa";
import { Repository } from "../utils/models";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface CardRepositoryProps {
  repo: Repository;
}

function CardRepository({ repo }: CardRepositoryProps) {
  return (
    <Stack spacing={4}>
      <Link href={repo.html_url}>
        <Text as={"b"} color={"black"} fontSize={"xl"}>
          {repo.name}
        </Text>
      </Link>
      <Flex>
        <Text>{repo.description || "Sem descrição"}</Text>
      </Flex>

      <HStack>
        <FaRegStar size={24} color={"slate"} />
        <Text fontSize={"sm"}>{repo.stargazers_count}</Text>
        <Text fontSize={"sm"}>
          {`Atualizado há ${formatDistanceToNow(new Date(repo.updated_at), {
            locale: ptBR,
            addSuffix: false,
          })}`}
        </Text>
      </HStack>
    </Stack>
  );
}

export default CardRepository;
