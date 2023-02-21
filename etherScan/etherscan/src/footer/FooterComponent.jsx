import styled from "styled-components";

const FooterComponent = () => {
  return (
    <FooterArea>
      <FunctionArea>
        <SNSArea>에스엔 에스 버튼들</SNSArea>
        <ToTopBtn>to top</ToTopBtn>
      </FunctionArea>
      <SiteInfo>여러가지 정보들</SiteInfo>
    </FooterArea>
  );
};
export default FooterComponent;
const FooterArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const FunctionArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const SNSArea = styled.div`
  background-color: gray;
`;
const ToTopBtn = styled.button`
  background-color: gray;
`;
const SiteInfo = styled.div`
  width: 100%;
  background-color: lightblue;
`;
