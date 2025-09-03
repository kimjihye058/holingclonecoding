import styled from "styled-components";

const servicesData = [
  {
    id: 1,
    img: "/assets/images/services/service_01.png",
    titles: ["매쓰홀릭", "매쓰홀릭T"],
    when: "학원, 학교에서 학생들의 학습을 분석하고 관리할 때",
    desc: `교과서, 참고서의 유사 문제를 만들고 
학생별 취약유형을 분석해 맞춤 학습을 진행하세요.`,
    advantages: [
      "/assets/images/services/school.svg",
      "/assets/images/services/b2b.svg",
    ],
    buttons: [
      {
        href: "https://www.matholic.com/",
        label1: "바로가기",
        label2: "(학원용 매쓰홀릭)",
      },
      {
        href: "https://school.matholic.com/",
        label1: "바로가기",
        label2: "(학교용 매쓰홀릭T)",
      },
    ],
  },
  {
    id: 2,
    img: "/assets/images/services/service_02.png",
    titles: ["연산대장"],
    when: "수학 연산 훈련이 필요할 때",
    desc: `연산 문제를 학년별 계산력/문장제 문제지를 만들고 
반복 학습으로 연산 능력을 키워보세요.`,
    advantages: [
      "/assets/images/services/b2b.svg",
      "/assets/images/services/free.svg",
    ],
    buttons: [
      {
        href: "https://ysdj.kr/",
        label1: "바로가기",
      },
    ],
  },
  {
    id: 3,
    img: "/assets/images/services/service_03.png",
    titles: ["시험대장"],
    when: "우리학교 족보로 시험을 준비할 떄",
    desc: `학교별 기출 시험지를 다운로드하고 
유사 문제로 내신을 대비하세요.`,
    advantages: [
      "/assets/images/services/b2b.svg",
      "/assets/images/services/free.svg",
    ],
    buttons: [
      {
        href: "https://shdj.kr/",
        label1: "바로가기",
      },
    ],
  },
];

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
          {servicesData.map((service) => (
            <Service key={service.id}>
              <ServiceImgDiv>
                <img
                  src={service.img}
                  alt=""
                  width={525}
                  style={{ maxWidth: "100%" }}
                />
              </ServiceImgDiv>
              <ServiceDescDiv
                style={{ paddingTop: "32px", paddingLeft: "64px" }}
              >
                <ServiceTitleDiv>
                  {service.titles.map((title, idx) => (
                    <ServiceTitleSpan key={idx}>
                      {title}
                      {idx < service.titles.length - 1 && (
                        <img
                          src="/assets/images/services/title_sep.svg"
                          alt="/"
                          width={"auto"}
                        />
                      )}
                    </ServiceTitleSpan>
                  ))}
                </ServiceTitleDiv>
                <ServiceWhen>{service.when}</ServiceWhen>
                <ServiceDescSpan>{service.desc}</ServiceDescSpan>
                <Advantages>
                  {service.advantages.map((adv, idx) => (
                    <img key={idx} src={adv} alt="" width={100} />
                  ))}
                </Advantages>
                <ButtonsDiv style={{marginTop: "65px"}}>
                  {service.buttons.map((btn, idx) => (
                    <Button key={idx} href={btn.href}>
                      <ButtonSpans>
                        <ButtonSpan1>{btn.label1}</ButtonSpan1>
                        <br />
                        <ButtonSpan2>{btn.label2}</ButtonSpan2>
                      </ButtonSpans>
                      <img src="/assets/images/services/link.svg" alt="" />
                    </Button>
                  ))}
                </ButtonsDiv>
              </ServiceDescDiv>
            </Service>
          ))}
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
`;

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 100%;
`;

export const Service = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ServiceImgDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  -webkit-box-pack: end;
  justify-content: flex-end;
  width: 50%;
`;

export const ServiceDescDiv = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const ServiceWhen = styled.span`
  color: rgb(18, 22, 25);
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 24px;
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
`;

export const Advantages = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Button = styled.a`
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

export const ButtonSpan1 = styled.span`
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  color: inherit;
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: inherit;
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
