import { assign, createMachine } from "xstate";
import { LoginFormValues } from "../validation";

type LoginMachineContext = {
  errorMessage: string;
};

type LoginMachineEvents = { type: "LOGIN"; data: LoginFormValues };

export const loginMachine = createMachine<LoginMachineContext>(
  {
    initial: "unauthenticated",
    schema: {
      services: {} as {
        login: { data: { id: string; text: string; done: boolean } }[];
      },
    },
    context: {
      errorMessage: "",
    },
    states: {
      unauthenticated: {
        on: {
          LOGIN: {
            target: "authenticating",
          },
        },
      },
      authenticating: {
        invoke: {
          src: "login",
          onDone: {
            target: "authenticated",
          },

          onError: {
            target: "unauthenticated",
            actions: "setErrorMessage",
          },
        },
      },
      authenticated: {},
      done: {},
    },
  },
  {
    actions: {
      setErrorMessage: assign((_context, event) => {
        return {
          errorMessage: "testing",
        };
      }),
    },
  }
);
