"use client";
import styled from "styled-components";

export function BgImage({url}: {url: string}) {
  return <Container $url={url} />;
}

const Container = styled.img<{$url: string}>`
  width: 121.6rem;
  height: 60rem;
  flex-shrink: 0;

  border-radius: 1.2rem;
  background: ${({ theme }) => theme.colors.primary === "#fff" ? `linear-gradient(
      0deg,
      rgba(20, 22, 36, 0.4) 0%,
      rgba(20, 22, 36, 0.4) 100%
    ),` : ""}
    url(${({ $url }) => $url}),
    lightgray 50%;
  background-size: cover;
  background-position: 0rem 50%;
`;
