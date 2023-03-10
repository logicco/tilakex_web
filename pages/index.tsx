import { Center, Text } from "@mantine/core";
import { PageHead } from "src/features/PageHead";
import { HomeLayout } from "src/features/Layout/HomeLayout";
import { en } from "src/domains/locale";

export default function HomePage() {
  return (
    <>
      <PageHead title={en.pageTitles.home} />
      <HomeLayout>
        <Center>
          <Text mt={4}>Home Page</Text>
        </Center>
      </HomeLayout>
    </>
  );
}
