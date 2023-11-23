import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  align-items: center;
  gap: 4rem;

  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${(props) => props.theme.colors.text.link};

  a:hover,
  p:hover {
    color: #4b6bfb;
    cursor: pointer;
  }
`;