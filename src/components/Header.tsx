import React, { useState } from "react";
import {
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  name?: string;
  isMobile: boolean;
}

function Header({ name, isMobile }: HeaderProps) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!username.trim()) {
      alert("Please enter a username to search for.");
      return;
    }
    navigate(`/profile/${username}`);
  }

  return (
    <HStack
      w={"full"}
      bg={"white"}
      h={"88px"}
      justify={"center"}
      py={5}
      display={isMobile ? "none" : "flex"}
    >
      <HStack px={5}>
        <Image src={logo} alt="Search devs" px={12} />

        <form onSubmit={handleSearch}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CiSearch size={20} color="slate" />
            </InputLeftElement>
            <Input
              placeholder={name || "Pesquise aqui"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputGroup>
        </form>
      </HStack>
    </HStack>
  );
}

export default Header;
