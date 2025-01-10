import React from "react";
import {
  FormControl,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import { CiSearch } from "react-icons/ci";

interface HeaderProps {
  name?: string;
}

function Header({ name }: HeaderProps) {
  return (
    <HStack w={"full"} bg={"white"} h={"88px"} justify={"center"} py={5}>
      <HStack px={5}>
        <Image src={logo} alt="Search devs" px={12} />

        <InputGroup w={"590px"}>
          <InputLeftElement pointerEvents="none">
            <CiSearch size={20} color="slate" />
          </InputLeftElement>
          <Input placeholder={name || "Pesquise aqui"} />
        </InputGroup>
      </HStack>
    </HStack>
  );
}

export default Header;
