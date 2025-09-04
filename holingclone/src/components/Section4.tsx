import styled from "styled-components";

const reasonsData = [
  {
    id: 1,
    text: `30억 누적 데이터가 안내하는
학습 경로로 더 빠르게`,
    img: "/assets/images/reason/reason1.svg",
    alt: "이유1",
  },
  {
    id: 2,
    text: `학교 현장에서 인정받는
학습 내용으로 더 촘촘하게`,
    img: "/assets/images/reason/reason2.svg",
    alt: "이유2",
  },
];

function Section4() {
  return (
    <Fourth>
      <Span1>
        홀링으로 공부하면
        <br />
        수학 <Span2>실력이 오르는</Span2> 이유
      </Span1>
      <Reasons>
        {reasonsData.map((reason) => (
          <Reason key={reason.id}>
            <DescSpan>{reason.text}</DescSpan>
            <img src={reason.img} alt={reason.alt} />
          </Reason>
        ))}
      </Reasons>
    </Fourth>
  );
}
export default Section4;

export const Fourth = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
  padding: 120px 0px;
  background: rgb(246, 247, 249);
`;

export const Span1 = styled.span`
  font-family: Maplestory;
  font-size: 48px;
  font-weight: 300;
  color: #121619;
  text-align: center;
  width: unset;
  white-space: normal;
  line-height: 1.4;
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
`;

export const Reasons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  box-pack: center;
  justify-content: center;
`;

export const Reason = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  -webkit-box-align: center;
  align-items: center;
  width: 450px;
`;

export const DescDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  -webkit-box-align: center;
  align-items: center;
`;

export const DescSpan = styled.span`
  font-family: Maplestory;
  font-size: 34px;
  font-weight: 300;
  color: inherit;
  text-align: center;
  width: unset;
  white-space: break-spaces;
  line-height: 1.4;
  letter-spacing: -0.68px;
  -webkit-text-stroke: 0.2px black;
`;
