"use client";

import { styled } from "styled-components";

interface FooterProps {}

const TagFooter = styled.footer`
  background-color: black;
  color: white;
  padding: 20px 24px;
  text-align: center;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 20px 160px;
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  line-height: 150%;

  @media (min-width: ${(props) => props.theme.tableBreakpoint}) {
    font-size: 16px;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 18px;
  }
`;

export function Footer(props: FooterProps) {
  return (
    <TagFooter>
      <FooterText>feito por Rafael Mendes ♥</FooterText>
      <FooterText>
        Usando como base um projeto da Rocketseat, todos os direitos reservados.
      </FooterText>
    </TagFooter>
  );
}
