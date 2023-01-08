import Link from "next/link";
import { NavbarHref } from "src/features/Layout/HomeLayout/HomeNavbar/NavbarItem/styles";
import { NavbarItemProps } from "src/features/Layout/HomeLayout/HomeNavbar/NavbarItem/types";

export function NavbarItem({ children, href }: NavbarItemProps) {
  return <NavbarHref href={href}>{children}</NavbarHref>;
}
