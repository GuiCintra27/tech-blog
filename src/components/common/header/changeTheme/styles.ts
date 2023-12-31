import styled from "styled-components";

export const Container = styled.div`
  width: 4.8rem;
  height: 2.8rem;

  display: flex;
  align-items: center;

  cursor: pointer;

  border-radius: 10rem;
  background: ${({ theme }) => theme.colors.changeThemeButton};

  transition: 0.4s;

  .white-circle {
    width: 2.4rem;
    height: 2.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10rem;
    background: #fff;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.12);

    transform: translateX(
      ${({ theme }) => (theme.colors.primary !== "#fff" ? "100%" : "0")}
    );
    transition: all 0.4s ease-in-out;
  }

  img {
    height: 1.4rem;
    width: 1.4rem;
  }
`;