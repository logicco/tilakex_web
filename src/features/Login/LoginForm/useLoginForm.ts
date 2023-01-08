import { useMachine, useSelector } from "@xstate/react";
import { useFormik } from "formik";
import { useAtom } from "jotai";
import { userTokenAtom } from "src/app/store/user";
import { loginMachine } from "src/domains/login/machine";
import {
  defaultLoginFormValues,
  LoginFormValues,
  loginValidationSchema,
} from "src/domains/login/validation";

export function useLoginForm() {
  const [userToken, setUserToken] = useAtom(userTokenAtom);
  const [state, send, service] = useMachine(loginMachine, {
    services: {
      login: async (_context, event) => {
        //TODO: call login endpoint
      },
    },
  });
  const formik = useFormik<LoginFormValues>({
    initialValues: defaultLoginFormValues,
    validationSchema: loginValidationSchema,
    onSubmit: function submitForm(values) {
      send({ type: "LOGIN", data: { ...values } });
    },
  });

  const isLoading = useSelector(service, (state) =>
    state.matches("authenticating")
  );

  const errorMessage = useSelector(
    service,
    (state) => state.context.errorMessage
  );

  return {
    formik,
    isLoading,
    errorMessage,
    userToken,
    state,
  };
}
