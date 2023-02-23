import styled from "styled-components";

const HeaderComponent = () => {
  return (
    <HeaderArea>
      <HeaderBox>
        <PriceInfoArea>여기는 가격정보</PriceInfoArea>
        <Login>Login</Login>
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

const PriceInfoArea = styled.div``;
const Login = styled.div`
  font-size: 0.8rem;
  padding: 5px;
  margin: 5px;
  border: 2px solid lightgray;
  border-radius: 10px;
  :hover {
    background-color: lightgray;
  }
`;
