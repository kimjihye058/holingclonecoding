import styled from "styled-components";

function Banner2() {
  return (
    <Banner>
      <Spans>
        <Span1>
          학교, 학원에서 120만 학생이 <MobileBr />
          경험한 수학 학습 솔루션
        </Span1>
        <Span2>
          우리 아이의 첫 수학 학습, <MobileBr />
          홀링으로 시작하세요
        </Span2>
      </Spans>
      <a href="">
        <SubDiv>구독하기</SubDiv>
      </a>
    </Banner>
  );
}
export default Banner2;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  box-align: center;
  align-items: center;
  box-pack: center;
  justify-content: center;
  width: 100%;
  padding: 66px 0px;
  background-image: url(/assets/images/freestart/bg.png);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: rgba(132, 223, 255, 0.32);
  @media (max-width: 800px) {
    padding: 40px 40px 52px;
  }
`;

export const Spans = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-align: center;
  align-items: center;
`;

export const Span1 = styled.span`
  font-family: Maplestory;
  font-size: 30px;
  font-weight: 300;
  color: rgb(0, 171, 21);
  text-align: center;
  width: unset;
  white-space: normal;
  line-height: 1.4;
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

export const Span2 = styled.span`
  font-family: Maplestory;
  font-size: 48px;
  font-weight: 300;
  color: rgb(18, 22, 25);
  text-align: center;
  width: unset;
  white-space: normal;
  line-height: 1.4;
  @media (max-width: 800px) {
    font-size: 24px;
  }
`;

const MobileBr = styled.br`
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;

export const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  user-select: none;
  padding: 20px 69px 29px;
  color: rgb(255, 255, 255);
  font-family: Maplestory;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.56px;
  border-radius: 44px;
  background: var(--p_green_500_btON, #00ab15);
  box-shadow: rgba(0, 0, 0, 0.12) 0px -10px 0px 0px inset;
  transition: transform 0.1s ease-in-out;
  @media (max-width: 800px) {
    font-size: 22px;
    padding: 19px 59px 25px;
  }
`;
