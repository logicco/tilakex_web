import { Card, Center, Container } from "@mantine/core";
import { LoginForm } from "src/features/Login/LoginForm";

export function LoginView() {
  return (
    <Container>
      <Center mt="lg">
        <Card w="50%">
          <Card.Section>
            <LoginForm />
          </Card.Section>
        </Card>
      </Center>
    </Container>
  );
}
