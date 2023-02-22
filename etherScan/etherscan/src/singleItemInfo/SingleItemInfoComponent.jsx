import styled from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import BlockBoxContainer from "./BlockBox/BlockBoxContainer";
import TxBoxContainer from "./TxBox/TxBoxContainer";
import AddrBoxContainer from "./AddrBox/AddrBoxContainer";

const SingleItemInfoComponent = ({
  itemInfo,
  type,
  value,
  moveTo,
  lastNumber,
}) => {
  return (
    <ItemContainer>
      <Title>
        {type == "block" && (
          <>
            Block <span>#{value}</span>
          </>
        )}
        {type == "tx" && (
          <TitleBox>
            Transaction Details
            <FuncBtn>
              <BsChevronLeft></BsChevronLeft>
            </FuncBtn>
            <FuncBtn>
              <BsChevronRight></BsChevronRight>
            </FuncBtn>
          </TitleBox>
        )}
        {type == "address" && (
          <TitleBox>
            Address<span>#{value}</span>
          </TitleBox>
        )}
      </Title>
      <ItemBox>
        <InfoBox>
          {type == "block" && (
            <BlockBoxContainer
              itemInfo={itemInfo}
              moveTo={moveTo}
              lastNumber={lastNumber}></BlockBoxContainer>
          )}
          {type == "tx" && (
            <TxBoxContainer
              itemInfo={itemInfo}
              moveTo={moveTo}></TxBoxContainer>
          )}
          {type == "address" && (
            <AddrBoxContainer
              itemInfo={itemInfo}
              moveTo={moveTo}></AddrBoxContainer>
          )}
        </InfoBox>
      </ItemBox>
    </ItemContainer>
  );
};
export default SingleItemInfoComponent;
const ItemContainer = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 1400px;
  > div {
    padding: 10px;
  }
`;
const ItemBox = styled.div`
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px lightgray;
  display: flex;
  flex-direction: column;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;
const FuncBtn = styled.div`
  display: flex;
  align-items: center;
  background-color: lightgray;
  border-radius: 5px;
  padding: 2px;
  margin-left: 3px;
  cursor: pointer;
`;
const Title = styled.div`
  font-weight: bold;

  span {
    color: gray;
  }
`;
const InfoBox = styled.div``;
