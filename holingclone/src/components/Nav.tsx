import styled from "styled-components";

function Nav() {
  return (
    <NavDiv>
      <WrapperContainer>
        <LogoDiv>
          <a>
            <ImgLogo src="/assets/images/common/favicon.svg" alt="logo" />
          </a>
        </LogoDiv>
        <ButtonDiv>
          <ADownload
            href="https://apps.apple.com/kr/app/%ED%99%80%EB%A7%81-%EC%88%98%ED%95%99%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-%EC%95%B1/id6478107698"
            target="_blank"
            rel="noreferrer"
          >
            앱 다운로드
          </ADownload>
          <ALogin>로그인</ALogin>
        </ButtonDiv>
      </WrapperContainer>
    </NavDiv>
  );
}
export default Nav;

export const NavDiv = styled.nav`
  display: flex;
  background: white;
  z-index: 100;
  width: 100%;
  border-bottom: 1px solid rgb(230, 231, 234);
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: fixed;
`;

export const ImgLogo = styled.img`
  width: 60px;
  margin-right: 20px;
`;

export const ADownload = styled.a`
  display: flex;
  height: 40px;
  padding: 8px 30px 0px;
  box-pack: center;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 20px;
  background: rgb(0, 171, 21);
  box-shadow: rgba(0, 0, 0, 0.12) 0px -5px 0px 0px inset;
  color: rgb(255, 255, 255);
  text-align: center;
  font-family: SUIT, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease-in-out;
`;

export const ALogin = styled.a`
  color: #000000;
  border: none;
  font-size: 16px;
  font-family: Maplestory, system-ui, Avenir, Helvetica, Arial, sans-serif;
`;

export const WrapperContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  max-width: 1280px;
`;

export const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  box-align: center;
  align-items: center;
`;
