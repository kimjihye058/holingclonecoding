import styled from "styled-components";

function Section5() {
  return (
    <Fifth>
      <Span1>
        <Span2>학부모</Span2>가 <MobileBr />
        이야기하는 홀링
      </Span1>
      <Cards>
        <CardDiv>
          <ConDiv>
            <ImgDiv>
              <img
                src="/assets/images/parents/card1.png"
                alt=""
                style={{ width: "100%" }}
              />
              <QuoteImg />
            </ImgDiv>
            <TitleSpan>강의 덕분에 부모 도움이 필요없어요</TitleSpan>
            <HumanDiv>
              <NameSpan>박O영</NameSpan>
              <ParentDiv />
              <ParentSpan>초등학교 5학년 학부모</ParentSpan>
            </HumanDiv>
          </ConDiv>
          <ConSpan>
            아이가 어려워하는 문제가 있으면 부모에게 물어보지 않아도 강의
            영상으로 다시 한 번 개념을 확인할 수 있어서 좋아요.
          </ConSpan>
        </CardDiv>
        <CardDiv>
          <ConDiv>
            <ImgDiv>
              <img
                src="/assets/images/parents/card2.png"
                alt=""
                style={{ width: "100%" }}
              />
              <QuoteImg />
            </ImgDiv>
            <TitleSpan>
              게임처럼 공부하니
              <br />
              지루해하지 않아요
            </TitleSpan>
            <HumanDiv>
              <NameSpan>박O영</NameSpan>
              <ParentDiv />
              <ParentSpan>초등학교 2학년 학부모</ParentSpan>
            </HumanDiv>
          </ConDiv>
          <ConSpan>
            예습과 복습을 모두 할 수 있다는 게 장점이에요. 지루하지 않게
            게임처럼 즐기면서 공부할 수 있는 학습 구성도 마음에 들어요.
          </ConSpan>
        </CardDiv>
        <CardDiv>
          <ConDiv>
            <ImgDiv>
              <img
                src="/assets/images/parents/card3.png"
                alt=""
                style={{ width: "100%" }}
              />
              <QuoteImg />
            </ImgDiv>
            <TitleSpan>
              아이의 실력을 바로
              <br />
              확인할 수 있어요
            </TitleSpan>
            <HumanDiv>
              <NameSpan>김O영</NameSpan>
              <ParentDiv />
              <ParentSpan>초등학교 3학년 학부모</ParentSpan>
            </HumanDiv>
          </ConDiv>
          <ConSpan>
            주간 학습 리포트로 지난주에 어떻게 공부했는지 알 수 있어요. 또, 학습
            현황을 보면서 아이의 문제 푸는 능력을 객관적으로 확인할 수 있어서
            좋아요.
          </ConSpan>
        </CardDiv>
      </Cards>
    </Fifth>
  );
}
export default Section5;
export const Fifth = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  box-align: center;
  align-items: center;
  width: 100%;
  padding: 120px 0px;
  @media (max-width: 800px) {
    padding: 80px 0px;
    gap: 50px;
  }
`;

export const Span1 = styled.span`
  font-family: Maplestory;
  font-size: 48px;
  font-weight: 300;
  color: rgb(18, 22, 25);
  text-align: center;
  width: unset;
  white-space: normal;
  line-height: 1.4;
  @media (max-width: 800px) {
    font-size: 32px;
  }
`;

export const Span2 = styled.span`
  font-family: inherit;
  font-size: 48px;
  font-weight: 500;
  color: var(--point_01);
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: inherit;
  @media (max-width: 800px) {
    font-size: 32px;
  }
`;

const MobileBr = styled.br`
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;
  box-align: center;
  align-items: center;
  box-pack: center;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-align: center;
  align-items: center;
  padding: 30px 40px;
  width: 376px;
  border-radius: 30px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(85, 86, 86, 0.12) 4px 4px 20px 0px;
  @media (max-width: 800px) {
    padding: 30px 20px;
    width: calc(100% - 40px);
  }
`;

export const ConDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  box-align: center;
  align-items: center;
  @media (max-width: 800px) {
    gap: 16px;
  }
`;

export const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-align: center;
  align-items: center;
`;

export const QuoteImg = styled.img.attrs({
 src: "/assets/images/parents/quote.svg",
})`
  width: 50px;
  position: relative;
  top: -12px;
  @media (max-width: 800px) {
    width: 36px;
  }
`;

export const TitleSpan = styled.span`
  font-family: Maplestory;
  font-size: 30px;
  font-weight: 300;
  color: inherit;
  text-align: center;
  width: unset;
  white-space: break-spaces;
  line-height: 1.4;
  @media (max-width: 800px) {
    font-size: 24px;
  }
`;

export const HumanDiv = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: 500;
  font-family: SUIT;
  color: rgb(117, 126, 133);
  gap: 10px;
  box-align: center;
  align-items: center;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

export const NameSpan = styled.span`
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: inherit;
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: inherit;
`;

export const ParentDiv = styled.div`
  flex-shrink: 0;
  width: 1px;
  height: 14px;
  background-color: rgb(217, 221, 224);
`;

export const ParentSpan = styled.div`
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: inherit;
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: inherit;
`;

export const ConSpan = styled.span`
  font-family: SUIT;
  font-size: 18px;
  font-weight: 500;
  color: inherit;
  text-align: center;
  white-space: normal;
  line-height: 1.5;
  width: 296px;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;
