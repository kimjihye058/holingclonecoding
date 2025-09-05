import styled from "styled-components";
import { useState, useEffect } from "react";

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Foot>
      <FlowDiv />
      <FooterDiv>
        <FooterConDiv>
          <LeftDiv>
            <DescDiv>
              <ComImg
                src="/assets/images/footer/company_logo.svg"
                alt=""
                width={225}
              />
              <ContectDivs style={{ padding: "10px 0px" }}>
                <ContectDiv>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    color="#3395BA"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"></path>
                  </svg>
                  <a
                    href="https://pf.kakao.com/_xeviMn/chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                      flexDirection: "row",
                      gap: "4px",
                    }}
                  >
                    <ContectSpan>카카오톡 문의하기</ContectSpan>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      color="#316c82"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 3V5H5V19H19V14H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3 3 3.44772 3 4H10ZM17.7071 7.70711L12 13.4142L10.5858 12L16.2929 6.29289L13 3H21V11L17.7071 7.70711Z"></path>
                    </svg>
                  </a>
                </ContectDiv>
                <ContectDiv>
                  <img src="/assets/images/footer/email.svg" alt="" />
                  <ContectSpan>help@matholic.net</ContectSpan>
                </ContectDiv>
                <ContectDiv>
                  <img src="/assets/images/footer/location.svg" alt="" />
                  <ContectSpan>
                    서울특별시 강남구 남부순환로351길 4, <MobileBr />
                    STAY 77, 3층
                  </ContectSpan>
                </ContectDiv>
              </ContectDivs>
            </DescDiv>
            <DescDiv>
              <CompanySpan>© 2025 Matholic Inc.</CompanySpan>
              <CompanyDescDiv>
                <CompanyDescDiv2>
                  <CompanyDescSpan>(주)매쓰홀릭</CompanyDescSpan>
                  <CompanyDotDiv2 />
                  <CompanyDescSpan>대표이사 강지훈, 김영희</CompanyDescSpan>
                </CompanyDescDiv2>
                <CompanyDotDiv />
                <CompanyDescSpan>사업자등록번호 119-86-42991</CompanyDescSpan>
                <CompanyDotDiv />
                <CompanyDescSpan>
                  통신판매업신고 2025-서울강남-04724
                </CompanyDescSpan>
              </CompanyDescDiv>
              <CompanyDescDiv2>
                <a href="https://parking.matholic.com/policy/service">
                  <CompanyPolicySpan>이용약관</CompanyPolicySpan>
                </a>
                <CompanyDotDiv2 />
                <a href="https://parking.matholic.com/policy/privacy">
                  <CompanyPolicySpan>개인정보처리방침</CompanyPolicySpan>
                </a>
                <CompanyDotDiv2 />
                <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1198642991">
                  <CompanyPolicySpan>사업자정보</CompanyPolicySpan>
                </a>
              </CompanyDescDiv2>
            </DescDiv>
          </LeftDiv>
          <RightDiv>
            <Download>
              {!isMobile && (
                <>
                  <a href="https://apps.apple.com/...">
                    <DownBtnDiv>iOS 앱 다운로드</DownBtnDiv>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.matholic.pullang">
                    <DownBtnDiv>Android 앱 다운로드</DownBtnDiv>
                  </a>
                </>
              )}
            </Download>
            <Sns>
              <a href="https://blog.naver.com/ilovematholic">
                <SnsImg src="/assets/images/footer/blog.svg" alt="" />
              </a>
              <a href="https://www.youtube.com/channel/UC0f2occwFdAosou2Ds29AUw">
                <SnsImg src="/assets/images/footer/youtube.svg" alt="" />
              </a>
              <a href="https://www.facebook.com/ilovematholic">
                <SnsImg src="/assets/images/footer/facebook.svg" alt="" />
              </a>
              <a href="https://www.instagram.com/holing_official/">
                <SnsImg src="/assets/images/footer/instagram.svg" alt="" />
              </a>
            </Sns>
          </RightDiv>
        </FooterConDiv>
      </FooterDiv>
    </Foot>
  );
}
export default Footer;

export const Foot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
`;

export const FlowDiv = styled.div`
  width: 100%;
  height: 78px;
  background-image: url(/assets/images/footer/flow.svg);
  background-repeat: repeat-x;
  background-position: 0 0;
  background-size: auto 100%;
  animation: flow-left 150s linear infinite;

  @keyframes flow-left {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 0;
    }
  }
  @media (max-width: 800px) {
    height: 22px;
    background-repeat: repeat-x;
  }
`;

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  background: #c1e9f8;
`;

export const FooterConDiv = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 384px;
  padding: 40px;
  background: rgb(193, 233, 248);
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 800px) {
    height: 549px;
    padding: 60px 18px;
    flex-direction: column;
    -webkit-box-align: start;
    justify-content: flex-start;
    gap: 36px;
  }
`;

export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 100%;
  @media (max-width: 800px) {
    gap: 36px;
  }
`;

export const DescDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 800px) {
    gap: 14px;
  }
`;

export const ComImg = styled.img`
  @media (max-width: 800px) {
    margin-bottom: 22px;
  }
`;

export const ContectDivs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContectDiv = styled.div`
  padding: 0px 8px;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const ContectSpan = styled.span`
  font-family: SUIT;
  font-size: 18px;
  font-weight: 600;
  color: rgb(49, 108, 130);
  text-align: inherit;
  width: unset;
  white-space: break-spaces;
  line-height: inherit;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
`;

const MobileBr = styled.br`
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;

export const CompanySpan = styled.span`
  font-family: SUIT;
  font-size: 16px;
  font-weight: 600;
  color: rgb(66, 123, 145);
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: inherit;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

export const CompanyDescDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  -webkit-box-align: center;
  align-items: center;
  @media (max-width: 800px) {
    align-items: start;
    flex-direction: column;
    gap: 8px;
  }
`;

export const CompanyDescDiv2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  -webkit-box-align: center;
  align-items: center;
  @media (max-width: 800px) {
    gap: 6px;
  }
`;

export const CompanyDescSpan = styled.span`
  color: rgb(88, 145, 166);
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  @media (max-width: 800px) {
    font-size: 12px;
    font-weight: 500;
  }
`;

export const CompanyDotDiv = styled.div`
  width: 6px;
  height: 6px;
  background: rgb(146, 211, 235);
  border-radius: 6px;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const CompanyDotDiv2 = styled.div`
  width: 6px;
  height: 6px;
  background: rgb(146, 211, 235);
  border-radius: 6px;
  @media (max-width: 800px) {
    width: 4px;
    height: 4px;
  }
`;

export const CompanyPolicySpan = styled.span`
  color: rgb(122, 175, 194);
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  @media (max-width: 800px) {
    font-size: 12px;
    font-weight: 500;
  }
`;

export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 800px) {
    gap: 0;
  }
`;

export const Download = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

export const DownBtnDiv = styled.div`
  display: flex;
  width: 230px;
  height: 62px;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  gap: 6.154px;
  border-radius: 31.043px;
  background: var(--p_green_500_btON, #00ab15);
  box-shadow: rgba(0, 0, 0, 0.12) 0px -8px 0px 0px inset;
  color: rgb(255, 255, 255);
  font-family: Maplestory;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease-in-out;
`;

export const Sns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const SnsImg = styled.img`
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease-in-out;
`;
