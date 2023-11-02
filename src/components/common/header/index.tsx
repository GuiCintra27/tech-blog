"use client";

import styled from "styled-components";
import { NavBar } from "./navBar";
import { SearchBar } from "./searchBar";
import { ChangeThemeButton } from "./changeThemeButton";

export function Header() {
  return (
    <Container>
      <main>
        <img className="logo" src="/logo/logo.svg" alt="Logo" />
        <NavBar />
        <div className="actions">
          <SearchBar />
          <ChangeThemeButton />
        </div>
      </main>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  main {
    width: 120rem;
    margin: 3.2rem auto;

    display: flex;
    justify-content: space-between;

    .logo {
      filter: brightness(${({ theme }) => theme.brightness})
        invert(${({ theme }) => theme.invert}) grayscale(1);
    }

    .actions {
      display: flex;
      align-items: center;

      gap: 4rem;
    }
  }
`;
