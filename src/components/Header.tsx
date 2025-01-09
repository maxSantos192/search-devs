import React from "react";
import {
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <HStack w={"full"} h={"88px"}>
      <HStack w={"full"} maxW={"1200px"} px={4} align={"center"}>
        <Image src={logo} alt="Search devs" px={12} />

        <InputGroup w={"590px"}>
          <InputLeftElement pointerEvents="none">
            <CiSearch size={20} color="slate" />
          </InputLeftElement>
          <Input placeholder="Diego Silva" />
        </InputGroup>
      </HStack>
    </HStack>
  );
}

export default Header;
