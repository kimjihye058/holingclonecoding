import styled from "styled-components";

function Section7() {
  return (
    <Seventh>
      <SeventhDiv>
        <Span>
          매쓰홀릭의 다양한
          <br />
          수학 서비스를 만나보세요
        </Span>
        <Services>
          {/* Service 1 */}
          <Service>
            <ServiceImgDiv>
              <ServiceImg src="/assets/images/services/service_01.png" />
            </ServiceImgDiv>
            <ServiceDescDiv>
              <ServiceTitleDiv>
                <ServiceTitleSpan>매쓰홀릭</ServiceTitleSpan>
                <SepImg src="/assets/images/services/title_sep.svg" alt="/" />
                <ServiceTitleSpan>매쓰홀릭T</ServiceTitleSpan>
              </ServiceTitleDiv>

              <ServiceWhen>
                학원, 학교에서 학생들의 학습을
                <MobileBr /> 분석하고 관리할 때
              </ServiceWhen>
              <ServiceDescSpan>
                교과서, 참고서의 유사 문제를 만들고
                <br />
                학생별 취약유형을 분석해 <MobileBr />
                맞춤 학습을 진행하세요.
              </ServiceDescSpan>
              <Advantages>
                <img
                  src="/assets/images/services/school.svg"
                  alt=""
                  width={100}
                />
                <img src="/assets/images/services/b2b.svg" alt="" width={100} />
              </Advantages>
              <ButtonsDiv>
                <Button1 href="https://www.matholic.com/">
                  <ButtonSpans>
                    <ButtonSpan1>바로가기</ButtonSpan1>
                    <br />
                    <ButtonSpan2>(학원용 매쓰홀릭)</ButtonSpan2>
                  </ButtonSpans>
                  <LinkImg src="/assets/images/services/link.svg" alt="" />
                </Button1>
                <Button1 href="https://school.matholic.com/">
                  <ButtonSpans>
                    <ButtonSpan1>바로가기</ButtonSpan1>
                    <br />
                    <ButtonSpan2>(학교용 매쓰홀릭T)</ButtonSpan2>
                  </ButtonSpans>
                  <LinkImg src="/assets/images/services/link.svg" alt="" />
                </Button1>
              </ButtonsDiv>
            </ServiceDescDiv>
          </Service>

          {/* Service 2 */}
          <Service>
            <ServiceImgDiv>
              <ServiceImg src="/assets/images/services/service_02.png" />
            </ServiceImgDiv>
            <ServiceDescDiv>
              <ServiceTitleDiv>
                <ServiceTitleSpan>연산대장</ServiceTitleSpan>
              </ServiceTitleDiv>

              <ServiceWhen>수학 연산 훈련이 필요할 때</ServiceWhen>
              <ServiceDescSpan>
                학년별 계산력/문장제 문제지를 만들고
                <br />
                반복 학습으로 연산 능력을 키워보세요.
              </ServiceDescSpan>
              <Advantages>
                <img src="/assets/images/services/b2b.svg" alt="" width={100} />
                <img
                  src="/assets/images/services/free.svg"
                  alt=""
                  width={100}
                />
              </Advantages>
              <ButtonsDiv>
                <Button2 href="https://ysdj.kr/">
                  <ButtonSpans>
                    <ButtonSpan1>바로가기</ButtonSpan1>
                  </ButtonSpans>
                  <LinkImg src="/assets/images/services/link.svg" alt="" />
                </Button2>
              </ButtonsDiv>
            </ServiceDescDiv>
          </Service>

          {/* Service 3 */}
          <Service>
            <ServiceImgDiv>
              <ServiceImg src="/assets/images/services/service_03.png" />
            </ServiceImgDiv>
            <ServiceDescDiv>
              <ServiceTitleDiv>
                <ServiceTitleSpan>시험대장</ServiceTitleSpan>
              </ServiceTitleDiv>

              <ServiceWhen>우리학교 족보로 시험을 준비할 때</ServiceWhen>
              <ServiceDescSpan>
                학교별 기출 시험지를 다운로드하고
                <br />
                유사 문제로 내신을 대비하세요.
              </ServiceDescSpan>
              <Advantages>
                <img src="/assets/images/services/b2b.svg" alt="" width={100} />
                <img
                  src="/assets/images/services/free.svg"
                  alt=""
                  width={100}
                />
              </Advantages>
              <ButtonsDiv>
                <Button2 href="https://shdj.kr/">
                  <ButtonSpans>
                    <ButtonSpan1>바로가기</ButtonSpan1>
                  </ButtonSpans>
                  <LinkImg src="/assets/images/services/link.svg" alt="" />
                </Button2>
              </ButtonsDiv>
            </ServiceDescDiv>
          </Service>
        </Services>
      </SeventhDiv>
    </Seventh>
  );
}

export default Section7;

export const Seventh = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  background: rgb(223, 245, 254);
`;

export const SeventhDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  background: white;
  padding: 100px 0px;
  @media (max-width: 800px) {
    gap: 80px;
    padding: 80px 20px;
  }
`;

export const Span = styled.span`
  width: unset;
  white-space: normal;
  color: rgb(37, 37, 37);
  text-align: center;
  font-family: Maplestory;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 800px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 100%;
  @media (max-width: 800px) {
    gap: 80px;
  }
`;

export const Service = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    max-width: 100%;
  }
`;

export const ServiceImgDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  -webkit-box-pack: end;
  justify-content: flex-end;
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const ServiceImg = styled.img`
  width: 525px;
  max-width: 100%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const ServiceDescDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  padding-left: 64px;
  @media (max-width: 800px) {
    -webkit-box-align: center;
    align-items: center;
    padding-top: 30px;
    padding-left: 0px;
  }
`;

export const ServiceTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ServiceTitleSpan = styled.span`
  color: rgb(18, 22, 25);
  font-family: Pretendard;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.38px;
  margin-bottom: 10px;
  @media (max-width: 800px) {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 0px;
  }
`;

export const SepImg = styled.img`
  width: auto;
  @media (max-width: 800px) {
    width: 11px;
  }
`;

export const ServiceWhen = styled.span`
  color: rgb(18, 22, 25);
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 24px;
  @media (max-width: 800px) {
    margin-top: 10px;
    font-size: 18px;
    text-align: center;
    white-space: pre-line;
  }
`;

export const ServiceDescSpan = styled.span`
  color: rgb(117, 126, 133);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  letter-spacing: -0.027px;
  white-space: break-spaces;
  margin-bottom: 24px;
  @media (max-width: 800px) {
    color: rgb(119, 119, 119);
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
  }
`;

const MobileBr = styled.br`
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;

export const Advantages = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 800px) {
    gap: 10px;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 65px;
  @media (max-width: 800px) {
    margin-top: 24px;
    gap: 8px;
  }
`;

export const Button1 = styled.a`
  display: flex;
  padding: 10px 40px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
  text-decoration: none;
  border-radius: 50px;
  background: rgb(38, 161, 250);
  color: rgb(255, 255, 255);
  text-align: center;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 136%;
  cursor: pointer;
  user-select: none;
  transition: transform 0.1s ease-in-out;
  @media (max-width: 800px) {
    padding: 0 0;
    width: 156px;
    height: 64px;
    font-size: 14px;
    line-height: 20px;
    gap: 10px;
  }
`;

export const Button2 = styled.a`
  display: flex;
  padding: 10px 40px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
  text-decoration: none;
  border-radius: 50px;
  background: rgb(38, 161, 250);
  color: rgb(255, 255, 255);
  text-align: center;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 136%;
  cursor: pointer;
  user-select: none;
  transition: transform 0.1s ease-in-out;
  @media (max-width: 800px) {
    line-height: 20px;
    gap: 10px;
    width: 260px;
    height: 56px;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const ButtonSpans = styled.span`
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: inherit;
  text-align: center;
  width: unset;
  white-space: normal;
  line-height: inherit;
`;

export const LinkImg = styled.img`
  height: 14px;
  @media (max-width: 800px) {
    height: 12px;
  }
`;

export const ButtonSpan1 = styled.span`
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  color: inherit;
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: inherit;
  @media (max-width: 800px) {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const ButtonSpan2 = styled.span`
  font-family: inherit;
  font-size: 0.8em;
  font-weight: 400;
  color: inherit;
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: inherit;
`;
