import styled from "styled-components";

function Section3() {
  return (
    <Third>
      <SpansDiv>
        <Span1>초등 수학 공부, 아이가 잘 따라갈 수 있을까요?</Span1>
        <Span2>
          홀링은
          <Span2_1>스스로 끝까지</Span2_1>
          해낼 수 있는
          <br />
          습관과 자신감을 길러줘요
        </Span2>
      </SpansDiv>
      <Steps>
        <Step1>
          <Photos
            style={{ backgroundImage: "url('/assets/images/steps/step1.png')" }}
          >
            <img
              src="/assets/images/steps/step1_beaver.svg"
              alt="step1비버"
              style={{
                position: "absolute",
                left: "-55px",
                bottom: "-22px",
              }}
            />
            <img
              src="/assets/images/steps/step1_overlay.svg"
              alt="step1오버레이"
              width={264}
              style={{
                position: "absolute",
                right: "-19px",
                bottom: "96.08px",
              }}
            />
          </Photos>
          <Descs>
            <StepNumber>
              <StepNumberSpan>1</StepNumberSpan>
            </StepNumber>
            <Desc1>
              <Desc1_1>문제풀이를 도와주는</Desc1_1>
              <Desc1_2>동영상 강의</Desc1_2>
            </Desc1>
            <Desc2>
              어려운 문제가 있으면 동영상 강의를 듣고 기초 개념과 유형을 다시
              학습해 보세요.
            </Desc2>
          </Descs>
        </Step1>
        <Step2>
          <Photos
            style={{ backgroundImage: "url('/assets/images/steps/step2.png')" }}
          >
            <img
              src="/assets/images/steps/ruby.svg"
              alt="step2루비"
              style={{
                position: "absolute",
                right: "-73px",
                bottom: "-30px",
              }}
            />
          </Photos>
          <Descs>
            <StepNumber>
              <StepNumberSpan>2</StepNumberSpan>
            </StepNumber>
            <Desc1>
              <Desc1_1>개념과 유형을 모두 잡는</Desc1_1>
              <Desc1_2>단계별 구성</Desc1_2>
            </Desc1>
            <Desc2>
              기초 개념부터 마무리까지 정해진 구성을 따라 학습하면서 단원을
              마스터해보세요.
            </Desc2>
          </Descs>
        </Step2>
        <Step1>
          <Photos
            style={{ backgroundImage: "url('/assets/images/steps/step3.png')" }}
          ></Photos>
          <Descs>
            <StepNumber>
              <StepNumberSpan>3</StepNumberSpan>
            </StepNumber>
            <Desc1>
              <Desc1_1>실력을 업그레이드하는</Desc1_1>
              <Desc1_2>레벨업 학습</Desc1_2>
            </Desc1>
            <Desc2>
              레벨을 점점 올리면서 난이도 높은 문제를 풀고, 내 실력도 함께
              높여보세요.
            </Desc2>
          </Descs>
        </Step1>
        <Step2>
          <Photos
            style={{ backgroundImage: "url('/assets/images/steps/step4.png')" }}
          >
            <img
              src="/assets/images/steps/step4_beaver.svg"
              alt="step4비버"
              style={{
                position: "absolute",
                right: "-76px",
                bottom: "-30px",
              }}
            />
          </Photos>
          <Descs>
            <StepNumber>
              <StepNumberSpan>4</StepNumberSpan>
            </StepNumber>
            <Desc1>
              <Desc1_1>취약유형을 클리어하는</Desc1_1>
              <Desc1_2>챌린지 학습</Desc1_2>
            </Desc1>
            <Desc2>
              AI 학습 분석으로 현재 실력을 진단하고, 부족한 유형을 보완해
              보세요.
            </Desc2>
          </Descs>
        </Step2>
        <Step1>
          <Photos
            style={{ backgroundImage: "url('/assets/images/steps/step5.png')" }}
          >
            <img
              src="/assets/images/steps/cloud.svg"
              alt="step1오버레이"
              style={{
                position: "absolute",
                left: "-32px",
                bottom: "94px",
              }}
            />
            <img
              src="/assets/images/steps/step5_beaver.svg"
              alt="step5비버"
              style={{
                position: "absolute",
                right: "-62px",
                bottom: "-25px",
              }}
            />
          </Photos>
          <Descs>
            <StepNumber>
              <StepNumberSpan>5</StepNumberSpan>
            </StepNumber>
            <Desc1>
              <Desc1_1>의욕과 재미를 더하는</Desc1_1>
              <Desc1_2>학습 보상</Desc1_2>
            </Desc1>
            <Desc2>
              학습 목표를 달성해 루비를 모으고 게임도 참여하면서 즐겁게 공부해
              보세요.
            </Desc2>
          </Descs>
        </Step1>
      </Steps>
    </Third>
  );
}
export default Section3;

export const Third = styled.div`
  display: flex;
  flex-direction: column;
  box-align: center;
  align-items: center;
  width: 100%;
  background: white;
  padding-top: 120px;
  padding-bottom: 120px;
`;

export const SpansDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-align: center;
  align-items: center;
`;

export const Span1 = styled.span`
  font-family: SUIT, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 30px;
  font-weight: 500;
  color: inherit;
  text-align: center;
  width: unset;
  white-space: normal;
  line-height: 1.4;
`;

export const Span2 = styled.span`
  font-family: Maplestory, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 48px;
  font-weight: 300;
  color: inherit;
  text-align: center;
  width: unset;
  white-space: normal;
  line-height: inherit;
  margin-bottom: 80px;
`;

export const Span2_1 = styled.span`
  font-family: Maplestory, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 48px;
  font-weight: 500;
  color: var(--point_01);
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: inherit;
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  max-width: 1280px;
`;

export const Step1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;
  align-items: flex-start;
  box-pack: start;
  justify-content: flex-start;
`;

export const Step2 = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 36px;
  align-items: flex-start;
  -webkit-box-pack: start;
  justify-content: flex-start;
`;

export const Photos = styled.div`
  position: relative;
  width: 521px;
  height: 400px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 24px;
  box-shadow: rgba(142, 147, 148, 0.08) 16px 16px 18px 0px,
    rgba(116, 123, 126, 0.12) 5px 5px 10px 0px;
  flex-shrink: 0;
  margin: 0px 82px 30px;
`;

export const Descs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin: 50px 0px 0px 50px;
  width: 300px;
`;

export const StepNumber = styled.div`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 24px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background: linear-gradient(
    270deg,
    rgb(1, 172, 20) 0%,
    rgb(1, 172, 20) 50%,
    rgb(0, 164, 16) 50%,
    rgb(0, 164, 16) 100%
  );
`;

export const StepNumberSpan = styled.span`
  font-family: inherit;
  font-size: 32px;
  font-weight: 600;
  color: white;
  text-align: inherit;
  width: 17px;
  white-space: normal;
  line-height: inherit;
`;

export const Desc1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Desc1_1 = styled.span`
  font-family: Maplestory;
  font-size: 20px;
  font-weight: 300;
  color: var(--point_01);
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: inherit;
`;

export const Desc1_2 = styled.span`
  font-family: Maplestory;
  font-size: 38px;
  font-weight: 300;
  color: inherit;
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: inherit;
`;

export const Desc2 = styled.span`
  font-family: SUIT;
  font-size: 18px;
  font-weight: 500;
  color: rgb(117, 126, 133);
  text-align: inherit;
  width: unset;
  white-space: break-spaces;
  line-height: 1.6;
`;
