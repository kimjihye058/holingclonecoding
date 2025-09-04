import styled from "styled-components";

import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Banner1 from "./components/Banner1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Banner2 from "./components/Banner2";
import Section6 from "./components/Section6";
import Banner3 from "./components/Banner3";
import Section7 from "./components/Section7";
import Footer from "./components/footer";

function Home() {
  return (
    <>
      <Body>
        <Nav />
        <Main>
          <Section1 />
          <Banner1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Banner2 />
          <Section6 />
          <Banner3 />
          <Section7 />
        </Main>
        <Footer />
      </Body>
    </>
  );
}
export default Home;

export const Main = styled.div`
  margin-top: 80px;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  box-align: center;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  background: rgb(251, 251, 251);
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
`;
