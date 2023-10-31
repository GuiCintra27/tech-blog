"use client";
import Image from "next/image";
import styled from "styled-components";

export function DataCard({
  category,
  title,
  author,
  date,
}: {
  category: {
    color: string;
    name: string;
  };
  title: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  date: string;
}) {
  return (
    <Container>
      <Category color={category.color}>
        <p>{category.name}</p>
      </Category>
      <Title>{title}</Title>
      <PostData>
        <div className="author">
          <Image src={author.avatarUrl} height={36} width={36} alt="" />
          <p className="light-bold">{author.name}</p>
        </div>
        <p>{date}</p>
      </PostData>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  left: 6.4rem;
  bottom: -6.4rem;
  display: flex;
  width: 59rem;
  padding: 4rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;

  border-radius: 1.2rem;
  border: 2px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.primary};

  /* shadow-md */
  box-shadow: 0px 12px 24px -6px ${({ theme }) => theme.colors.primary === "#fff" ? "rgba(24, 26, 42, 0.12)" : "rgba(230, 231, 235, 0.12)"};
`;

export const Category = styled.div<{ color: string }>`
  display: flex;
  padding: 0.4rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  border-radius: 0.6rem;
  background: ${({ color }) => color};

  p {
    color: #fff;

    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2rem; /* 142.857% */
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};

  font-size: 3.6rem;
  font-weight: 600;
  line-height: 4rem; /* 111.111% */
`;

export const PostData = styled.div`
  display: flex;
  height: 3.6rem;
  align-items: center;
  gap: 2rem;

  img {
    clip-path: circle(50% at 50%);
    height: 3.6rem;
    width: 3.6rem;
  }

  p {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .light-bold {
    font-weight: 500;
  }

  .author {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`;
