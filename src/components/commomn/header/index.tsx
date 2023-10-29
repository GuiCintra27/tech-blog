"use client"

import { toggleTheme } from "@/components/infra/storage/theme";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export function Header({children}: {children: React.ReactNode}) {
  const dispatch = useDispatch();
  
  
  return (
    <Container onClick={() => dispatch(toggleTheme())}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  display: flex;
`