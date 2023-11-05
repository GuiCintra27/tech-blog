"use client";

import styled from "styled-components";

import { Links } from "./links";
import { Contact } from "./contact";
import { NewsLetter } from "./newsLetter";
import { OtherInformations } from "./otherInformations";

export function Footer() {
  return (
    <Container>
      <main>
        <Contact />
        <Links />
        <NewsLetter />
      </main>
      <OtherInformations />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 2rem;

  width: 100vw;
  height: 100%;
  display: flex;

  flex-direction: column;
  align-items: center;

  font-family: var(--jakarta-sans);
  background-color: ${({ theme }) => theme.colors.footer};
  border-top: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.colors.border};

  main {
    margin: 6.4rem 0;

    width: 120rem;
    display: flex;

    justify-content: space-between;
  }
`;
