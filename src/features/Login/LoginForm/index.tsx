import {
  Alert,
  Box,
  Button,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons";
import { title } from "process";
import { showErrorMessage } from "src/app/helpers/validation";
import { en } from "src/domains/locale";
import { useLoginForm } from "./useLoginForm";

const {
  login: { form },
} = en;

export function LoginForm() {
  const {
    formik: {
      values,
      handleBlur,
      handleChange,
      errors,
      dirty,
      touched,
      submitForm,
      isValid,
    },
    isLoading,
    errorMessage,
    userToken,
  } = useLoginForm();

  return (
    <Box p="lg">
      <Title order={4} align="center">
        {form.title}
      </Title>
      {errorMessage ? (
        <Alert
          title="Looks like some errors!"
          color="red"
          icon={<IconAlertCircle size={16} />}
        >
          {errorMessage}
        </Alert>
      ) : null}
      <Box mt={"xl"}>
        <TextInput
          label={form.email.label}
          placeholder={form.email.placeHolder}
          withAsterisk
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          error={showErrorMessage(
            Boolean(touched.email && errors.email),
            errors.email
          )}
          value={values.email}
        />
        <PasswordInput
          label={form.password.label}
          placeholder={form.password.placeHolder}
          withAsterisk
          name="password"
          onBlur={handleBlur}
          onChange={handleChange}
          error={showErrorMessage(
            Boolean(touched.password && errors.password),
            errors.password
          )}
          value={values.password}
        />
        <Stack align="flex-end" mt="lg">
          <Button
            loading={isLoading}
            onClick={submitForm}
            disabled={!dirty || !isValid || isLoading}
          >
            {form.button}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
