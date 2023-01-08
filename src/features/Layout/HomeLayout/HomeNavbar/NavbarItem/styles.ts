import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { NextLink } from "src/ui";

export const NavbarHref = styled(NextLink)`
  ${({ theme }) => css`
    display: block;
    line-height: 1;
    padding: 8px 12px;
    font-weight: 500;
    border-radius: ${theme.radius.sm}px;
    font-size: ${theme.fontSizes.sm}px;
    color: ${theme.colorScheme === "dark"
      ? theme.colors.dark[0]
      : theme.colors.gray[7]};

    &:hover {
      background-color: ${theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0]};
    }
  `}
`;
