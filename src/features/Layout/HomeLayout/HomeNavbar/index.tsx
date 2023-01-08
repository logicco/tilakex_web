import { Center, Container, Flex, Group, Header, Title } from "@mantine/core";
import { NextLink } from "src/ui";
import { NavbarItem } from "./NavbarItem";

export function HomeNavbar() {
  return (
    <Header height={60}>
      <Container>
        <Flex justify="space-between">
          <NextLink href="/">
            <Title order={1} color="blue.5">
              Tilakex
            </Title>
          </NextLink>

          <Center>
            <NavbarItem href="/user/login">Login</NavbarItem>
          </Center>
        </Flex>
      </Container>
    </Header>
  );
}
