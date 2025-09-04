import styled from "styled-components";

function Banner1() {
  return (
    <Banner>
      <BannerImgBox>
        <picture>
          <source
            media="(max-width: 800px)"
            srcSet="/assets/images/banner/banner_invite_mobile.png"
          />
          <img
            src="/assets/images/banner/banner_invite.png"
            alt="invite"
            loading="lazy"
          />
        </picture>
      </BannerImgBox>

      <BannerImgBox>
        <picture>
          <source
            media="(max-width: 800px)"
            srcSet="/assets/images/banner/banner_brand_mobile.png"
          />
          <img
            src="/assets/images/banner/banner_brand.png"
            alt="brand"
            loading="lazy"
          />
        </picture>
      </BannerImgBox>
    </Banner>
  );
}
export default Banner1;

export const Banner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-image: linear-gradient(
    90deg,
    rgb(65, 129, 248) 50%,
    rgb(34, 201, 247) 50%
  );
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const BannerImgBox = styled.div`
  cursor: pointer;
  z-index: 2;
  height: 120px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 800px) {
    height: auto;
  }
`;

