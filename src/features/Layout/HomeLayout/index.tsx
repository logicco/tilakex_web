import { Container } from "@mantine/core";
import { PropsWithChildren } from "react";
import { HomeNavbar } from "src/features/Layout/HomeLayout/HomeNavbar";

export function HomeLayout({ children }: PropsWithChildren) {
  return (
    <Container fluid h="100vh">
      <HomeNavbar />
      {children}
    </Container>
  );
}
