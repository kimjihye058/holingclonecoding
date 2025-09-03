import styled from "styled-components";

function Section1() {
  return (
    <First>
      <FirstLeft>
        <Title>스스로 학습하는 수학 공부 앱</Title>
        <Brand>홀링</Brand>
        <Desc>
          동영상 강의, 문제풀이, 오답학습까지
          <br /> 혼자서도 알차고 탄탄하게 공부해요
        </Desc>
        <TryButton href="">무료체험 시작하기</TryButton>
      </FirstLeft>
      <FirstRight>
        <img src="/assets/images/main/scroll.svg" alt="" />
        <CloudTextWrapper>
          <img src="/assets/images/main/tablet.svg" alt="" />
          <span style={{ fontSize: 16, fontFamily: "Maplestory" }}>
            홀링 앱은 <GreenSpan>태블릿, 스마트폰</GreenSpan>에서 <br />
            다운로드 및 이용 가능
          </span>
        </CloudTextWrapper>
      </FirstRight>
    </First>
  );
}
export default Section1;

export const First = styled.div`
  display: flex;
  flex-direction: row;
  gap: 170px;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  background: url(/assets/images/main/bg.png);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: auto;
  padding-top: calc(-415px + 50vh);
  padding-right: 0px;
  padding-bottom: calc(-415px + 52vh);
  padding-left: 0px;
`;

export const Title = styled.span`
  color: #000;
  font-size: 30px;
  font-weight: 700;
  font-family: SUIT, system-ui, Avenir, Helvetica, Arial, sans-serif;
  display: block;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Brand = styled.span`
  color: #000;
  font-size: 90px;
  font-weight: 400;
  font-family: Maplestory, system-ui, Avenir, Helvetica, Arial, sans-serif;
  display: block;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Desc = styled.span`
  font-size: 24px;
  font-family: SUIT, system-ui, Avenir, Helvetica, Arial, sans-serif;
  color: #757e85;
  display: block;
  margin-top: 28px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TryButton = styled.a`
  display: flex;
  width: 200px;
  height: 50px;
  flex-direction: column;
  box-align: center;
  align-items: center;
  border-radius: 44px;
  background: var(--p_green_500_btON, #00ab15);
  box-shadow: rgba(0, 0, 0, 0.12) 0px -12px 0px 0px inset;
  cursor: pointer;
  user-select: none;
  color: #fff;
  padding: 18px 48px;
  font-family: Maplestory, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.52px;
  margin: 80px 0px 0px;
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 14px 28px;
  }
`;

export const FirstLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

export const FirstRight = styled.div`
  display: flex;
  flex-direction: column;
  box-align: center;
  align-items: center;
`;

export const GreenSpan = styled.span`
  color: #00ab15;
  font-weight: 700;
  font-family: Maplestory, system-ui, Avenir, Helvetica, Arial, sans-serif;
`;

export const CloudTextWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #000;
  min-width: 260px;
  min-height: 80px;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 436px;
    height: 114px;
    background: url("/assets/images/main/cloud.svg") no-repeat center/contain;
    transform: translate(-50%, -50%);
    z-index: -1;
    pointer-events: none;
  }
`;
