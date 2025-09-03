import { useState } from "react";
import styled from "styled-components";

function Section6() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleQuestion = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqList = [
    {
      question: "누가 이용할 수 있나요?",
      answer: "초등, 중등, 고등의 1,2학기 전체 과정을 모두 이용할 수 있어요.",
    },
    {
      question: "어떤 기기를 사용해야 하나요?",
      answer: `태블릿(갤럭시탭, 아이패드 등), 크롬북, 스마트폰에서 사용 가능하며 태블릿을 사용하면 가장 편리해요. 
* 권장 사양: 안드로이드 버전 8 이상 / iOS 버전 13.5 이상`,
    },
    {
      question: "무료체험은 어떻게 진행되나요?",
      answer: `'무료체험 시작하기' 버튼 또는 로그인 버튼을 눌러 회원가입만 하면 바로 홀링의 모든 서비스를 7일간 무료로 경험하실 수 있어요.
무료체험이 끝나고 홀링을 계속 이용하시려면 구독 플랜에서 월 정기구독 또는 3,6,12개월 구독권을 구매해 주세요.`,
    },
    {
      question: "요금과 결제 방법이 궁금해요",
      answer: `매달 30,000원이 결제되는 '월 정기구독'과 3,6,12개월마다 각각 79,000원, 139,000원, 249,000원이 결제되는 '기간별 구독' 중 선택하실수 있어요. 
결제는 네이버페이 또는 카드 등록으로 편리하게 이용 가능해요.`,
    },
    {
      question: "아이의 학습 결과를 어떻게 확인하나요?",
      answer: `홀링 앱의 학습 현황에서 아이의 실시간 학습 내역을 확인할 수 있고,
매주 월요일마다 공개되는 주간 학습 리포트에서 지난 일주일의 학습 결과를 확인할 수 있어요.`,
    },
  ];

  return (
    <Sixth>
      <TitleSpan>자주 묻는 질문</TitleSpan>
      <QaADiv>
        {faqList.map((faq, idx) => {
          const isOpen = openIndexes.includes(idx);
          return (
            <Question key={idx} onClick={() => toggleQuestion(idx)}>
              <QuesHeader1>
                <QuesHeader2>
                  <img
                    src={
                      isOpen
                        ? "assets/images/faq/question_opened.svg"
                        : "assets/images/faq/question_collapsed.svg"
                    }
                    width={44}
                  />
                  <QuesSpan $isOpen={isOpen}>{faq.question}</QuesSpan>
                </QuesHeader2>
                <img
                  src={
                    isOpen
                      ? "assets/images/faq/collapse.svg"
                      : "assets/images/faq/open.svg"
                  }
                  width={20}
                />
              </QuesHeader1>
              {isOpen && <Answer>{faq.answer}</Answer>}
            </Question>
          );
        })}
      </QaADiv>
    </Sixth>
  );
}

export default Section6;

export const Sixth = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  width: 100%;
  padding: 120px 40px;
  background: rgb(246, 247, 249);
`;

export const TitleSpan = styled.span`
  font-family: Maplestory;
  font-size: 48px;
  font-weight: 300;
  line-height: 1.4;
`;

export const QaADiv = styled.div`
  max-width: 1200px;
  margin: 0px 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 38px;
  border-radius: 30px;
  background: #fff;
  cursor: pointer;
  user-select: none;
`;

export const QuesHeader1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuesHeader2 = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const QuesSpan = styled.span<{ $isOpen: boolean }>`
  font-family: Maplestory;
  font-size: 28px;
  font-weight: 300;
  color: ${({ $isOpen }) => ($isOpen ? "rgb(0, 171, 21)" : "#121619")};
`;

export const Answer = styled.div`
  border-radius: 18px;
  background: rgb(245, 249, 248);
  padding: 20px;
  color: var(--gray_900, #121619);
  font-family: SUIT;
  font-size: 18px;
  font-weight: 500;
  line-height: 160%;
  white-space: break-spaces;
`;
