import styled from "styled-components";

function Banner3() {
  return (
    <BannerDiv>
      <Banner>
        <BannerInside>
          <BannerInsideDiv>
            <Span1>
              중·고등 수학은
              <Span2> 홀링 플러스</Span2>로 <MobileBr />
              똑똑하게 공부하세요
            </Span1>
            <Img src="/assets/images/banner/chalk.svg" />
          </BannerInsideDiv>
        </BannerInside>
      </Banner>
    </BannerDiv>
  );
}
export default Banner3;

export const BannerDiv = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  flex-shrink: 0;
  padding: 120px 40px 0px;
  width: 100%;
  max-width: 1280px;
  @media (max-width: 800px) {
    padding: 80px 20px;
  }
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 119px;
  background-image: url(/assets/images/banner/bg.png);
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center 0px;
  @media (max-width: 800px) {
    height: 180px;
  }
`;

export const BannerInside = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  inset: 0px;
  background: rgba(255, 135, 0, 0.7);
  border-radius: 20px;
`;

export const BannerInsideDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: absolute;
  inset: 0px;
  background: linear-gradient(
    90deg,
    rgba(255, 135, 0, 0) 0%,
    rgba(255, 135, 0, 0.49) 19.5%,
    rgba(255, 135, 0, 0.9) 53.5%,
    rgba(255, 135, 0, 0.45) 80.5%,
    rgba(255, 135, 0, 0) 100%
  );
  backdrop-filter: blur(1px);
  border-radius: 20px;
  @media (max-width: 800px) {
    flex-direction: column;
    -webkit-box-align: end;
    justify-content: flex-end;
  }
`;

export const Span1 = styled.span`
  font-family: SUIT;
  font-size: 34px;
  font-weight: 800;
  color: rgb(255, 255, 255);
  text-align: center;
  width: unset;
  white-space: normal;
  line-height: inherit;
  letter-spacing: -1px;
  @media (max-width: 800px) {
    font-size: 24px;
  }
`;

export const Span2 = styled.span`
  font-family: inherit;
  font-size: 34px;
  font-weight: 500;
  color: rgb(255, 246, 36);
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: inherit;
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

export const Img = styled.img`
  align-self: flex-end;
  @media (max-width: 800px) {
    width: 175px;
  }
`;