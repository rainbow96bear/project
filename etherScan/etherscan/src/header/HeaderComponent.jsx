import styled from "styled-components";

const HeaderComponent = () => {
  return (
    <HeaderArea>
      <HeaderBox>
        <PriceInfoArea>여기는 가격정보</PriceInfoArea>
        <SimpleSettingArea>여기는 간단한 설정</SimpleSettingArea>
      </HeaderBox>
    </HeaderArea>
  );
};
export default HeaderComponent;
const HeaderArea = styled.div``;
const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
`;

const PriceInfoArea = styled.div`
  background-color: green;
`;
const SimpleSettingArea = styled.div`
  background-color: green;
`;
