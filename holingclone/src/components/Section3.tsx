import styled from "styled-components";

function Section3() {
  return (
    <Third>
      <SpansDiv>
        <Span1>
          초등 수학 공부, <MobileBr />
          아이가 잘 따라갈 수 있을까요?
        </Span1>
        <Span2>
          홀링은
          <Span2_1>
            {" "}
            스스로 끝까지
            <MobileBr />{" "}
          </Span2_1>
          해낼 수 있는
          <br />
          습관과 자신감을 길러줘요
        </Span2>
      </SpansDiv>

      <Steps>
        {/* Step 1 */}
        <Step1>
          <Photos
            style={{ backgroundImage: `url(/assets/images/steps/step1.png)` }}
          >
            <StepImage
              src="/assets/images/steps/step1_beaver.svg"
              alt="step1비버"
              className="step1_beaver"
            />
            <StepImage
              src="/assets/images/steps/step1_overlay.svg"
              alt="step1오버레이"
              className="step1_overlay"
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

        {/* Step 2 */}
        <Step2>
          <Photos
            style={{ backgroundImage: `url(/assets/images/steps/step2.png)` }}
          >
            <StepImage
              src="/assets/images/steps/ruby.svg"
              alt="step2루비"
              className="step2_ruby"
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

        {/* Step 3 */}
        <Step1>
          <Photos
            style={{ backgroundImage: `url(/assets/images/steps/step3.png)` }}
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

        {/* Step 4 */}
        <Step2>
          <Photos
            style={{ backgroundImage: `url(/assets/images/steps/step4.png)` }}
          >
            <StepImage
              src="/assets/images/steps/step4_beaver.svg"
              alt="step4비버"
              className="step4_beaver"
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

        {/* Step 5 */}
        <Step1>
          <Photos
            style={{ backgroundImage: `url(/assets/images/steps/step5.png)` }}
          >
            <StepImage
              src="/assets/images/steps/cloud.svg"
              alt="step5구름"
              className="cloud"
            />
            <StepImage
              src="/assets/images/steps/step5_beaver.svg"
              alt="step5비버"
              className="step5_beaver"
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
            <Desc2>{`학습 목표를 달성해 루비를 모으고 
게임도 참여하면서 즐겁게 공부해 보세요.`}</Desc2>
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
  @media (max-width: 800px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const SpansDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-align: center;
  align-items: center;
  @media (max-width: 800px) {
    gap: 18px;
  }
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
  @media (max-width: 800px) {
    font-size: 18px;
    font-weight: 300;
  }
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
  @media (max-width: 800px) {
    margin-bottom: 50px;
    font-size: 32px;
  }
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

export const StepImage = styled.img`
  position: absolute;

  &.step1_beaver {
    left: -55px;
    bottom: -22px;
  }
  &.step1_overlay {
    width: 264px;
    right: -19px;
    top: 96.08px;
  }
  &.step2_ruby {
    right: -73px;
    bottom: -30px;
  }
  &.step4_beaver {
    right: -76px;
    bottom: -30px;
  }
  &.cloud {
    left: -32px;
    bottom: 94px;
  }
  &.step5_beaver {
    right: -62px;
    bottom: -25px;
  }

  @media (max-width: 800px) {
    &.step1_beaver {
      width: 79px;
      left: -29px;
      bottom: -11.5px;
    }
    &.step1_overlay {
      width: 138.745px;
      right: -10px;
      top: 50px;
    }
    &.step2_ruby {
      width: 84px;
      right: -38px;
      bottom: -15px;
    }
    &.step4_beaver {
      width: 83px;
      right: -40px;
      bottom: -16px;
    }
    &.cloud {
      width: 52.5px;
      left: -16px;
      bottom: 49px;
    }
    &.step5_beaver {
      width: 150px;
      right: -32.6px;
      bottom: -13.3px;
    }
  }
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  max-width: 1280px;
  @media (max-width: 800px) {
    gap: 70px;
  }
`;

export const Step1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;
  align-items: flex-start;
  box-pack: start;
  justify-content: flex-start;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;

export const Step2 = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 36px;
  align-items: flex-start;
  -webkit-box-pack: start;
  justify-content: flex-start;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
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
  @media (max-width: 800px) {
    width: 273.285px;
    height: 209px;
    border-radius: 15px;
    box-shadow: rgba(142, 147, 148, 0.08) 9.94275px 9.94275px 11.1856px 0px,
      rgba(116, 123, 126, 0.12) 3.10711px 3.10711px 6.21422px 0px;
    margin: 0px;
  }
`;

export const Descs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin: 50px 0px 0px 50px;
  width: 300px;
  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    margin-left: 0px;
    gap: 0px;
  }
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
  @media (max-width: 800px) {
    width: 40px;
    height: 40px;
    border-radius: 16px;
  }
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
  @media (max-width: 800px) {
    font-size: 23px;
    width: 14px;
  }
`;

export const Desc1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 800px) {
    margin-top: 8px;
    gap: 2px;
    align-items: center;
  }
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
  @media (max-width: 800px) {
    font-size: 16px;
  }
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
  @media (max-width: 800px) {
    font-size: 28px;
  }
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
  @media (max-width: 800px) {
    text-align: center;
    margin-top: 14px;
  }
`;
