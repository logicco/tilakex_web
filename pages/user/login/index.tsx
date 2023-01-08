import { PageHead } from "src/features/PageHead";
import { HomeLayout } from "src/features/Layout/HomeLayout";
import { LoginView } from "src/features/Login";
import { en } from "src/domains/locale";

export default function LoginPage() {
  return (
    <>
      <PageHead title={en.pageTitles.login} />
      <HomeLayout>
        <LoginView />
      </HomeLayout>
    </>
  );
}
