import * as yup from "yup";

export type LoginFormValues = {
  email: string;
  password: string;
};

export const defaultLoginFormValues: LoginFormValues = {
  email: "email@email.com",
  password: "123",
};

export const loginValidationSchema = yup.object().shape({
  email: yup.string().trim().required().email(),
  password: yup.string().trim().required(),
});
