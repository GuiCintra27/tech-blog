import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  main {
    width: 120rem;
    margin: 3.2rem auto;

    display: flex;
    justify-content: space-between;

    #logo {
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