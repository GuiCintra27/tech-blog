import Image from "next/image";
import styled from "styled-components";

export function OtherInformations() {
  return (
    <Container>
      <Image src={"/logo/copyright-Info.svg"} width={363} height={54} alt="" />
      <div className="moreInformations">
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 120rem;
  padding: 3.2rem 0rem;
  align-items: center;
  justify-content: space-between;

  border-top: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.colors.border};

  .moreInformations{
    display: flex;
    gap: 1.16rem;
    align-items: center;
    color: ${({ theme }) => theme.colors.text.link};
    font-size: 1.6rem;
    line-height: 2.4rem; /* 150% */

    cursor: pointer;
  }

  img{
    filter: brightness(${({ theme }) => theme.brightness}) invert(${({ theme }) => theme.invert});
  }
`;
