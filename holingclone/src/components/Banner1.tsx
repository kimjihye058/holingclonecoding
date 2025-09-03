import styled from "styled-components";

function Banner1() {
  return (
    <Banner>
      <BannerImgBox>
        <img src="/assets/images/banner/banner_invite.png" alt="" />
      </BannerImgBox>
      <BannerImgBox>
        <img src="/assets/images/banner/banner_brand.png" alt="" />
      </BannerImgBox>
    </Banner>
  );
}
export default Banner1;

export const Banner = styled.div`
  display: flex;
  flex-direction: row;
  box-align: center;
  align-items: center;
  box-pack: center;
  justify-content: center;
  width: 100%;
  background-image: linear-gradient(
    90deg,
    rgb(65, 129, 248) 50%,
    rgb(34, 201, 247) 50%
  );
`;

export const BannerImgBox = styled.div`
  cursor: pointer;
  z-index: 2;
  height: 120px;

  img {
    margin: 0 auto;
    display: block;
    height: 120px;
    width: auto;
  }
`;
