import { atom } from "jotai";

export const userTokenAtom = atom("default");

export const getUserToken = atom((get) => get(userTokenAtom));
export const setUserToken = atom(null, (get, set, update: string) =>
  set(userTokenAtom, update)
);
