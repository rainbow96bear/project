import styled from "styled-components";
import {
  BsQuestionCircle,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

const BlockBoxComponent = ({ itemInfo, moveTo, lastNumber }) => {
  return (
    <BlockBox>
      <ItemBox>
        <BsQuestionCircle></BsQuestionCircle>
        <KeyText> Block Height: </KeyText>
        <ValueText>
          {itemInfo?.blockHeight}{" "}
          <FuncBtn
            onClick={() => {
              moveTo(`/Block/${+itemInfo?.blockHeight - 1}`);
            }}>
            <BsChevronLeft></BsChevronLeft>
          </FuncBtn>
          <FuncBtn
            onClick={() => {
              if (lastNumber > +itemInfo.blockHeight) {
                moveTo(`/Block/${+itemInfo?.blockHeight + 1}`);
              }
            }}>
            <BsChevronRight></BsChevronRight>
          </FuncBtn>
        </ValueText>
      </ItemBox>
      <ItemBox>
        <BsQuestionCircle></BsQuestionCircle>
        <KeyText> Timestamp: </KeyText>
        <ValueText>{itemInfo?.timeStamp}</ValueText>
      </ItemBox>
      <ItemBox>
        <BsQuestionCircle></BsQuestionCircle>
        <KeyText> Transactions: </KeyText>
        <ValueText>{itemInfo?.transactionNumber}</ValueText>
      </ItemBox>
      <ItemBox>
        <BsQuestionCircle></BsQuestionCircle>
        <KeyText> Size: </KeyText>
        <ValueText>{itemInfo?.size}</ValueText>
      </ItemBox>
      <ItemBox>
        <BsQuestionCircle></BsQuestionCircle>
        <KeyText> Gas Used: </KeyText>
        <ValueText>{itemInfo?.gasUsed}</ValueText>
      </ItemBox>
      <ItemBox>
        <BsQuestionCircle></BsQuestionCircle>
        <KeyText> Gas Limit: </KeyText>
        <ValueText>{itemInfo?.gasLimit}</ValueText>
      </ItemBox>
      <ItemBox>
        <BsQuestionCircle></BsQuestionCircle>
        <KeyText> Extra Data: </KeyText>
        <ValueText>{itemInfo?.extraData}</ValueText>
      </ItemBox>
      <ItemBox>
        <BsQuestionCircle></BsQuestionCircle>
        <KeyText> Hash: </KeyText>
        <ValueText>{itemInfo?.hash}</ValueText>
      </ItemBox>
      <ItemBox>
        <BsQuestionCircle></BsQuestionCircle>
        <KeyText> Parent Hash: </KeyText>
        <ValueText
          onClick={() => {
            moveTo(`/Block/${itemInfo?.parentHash}`);
          }}>
          <span>{itemInfo?.parentHash}</span>
        </ValueText>
      </ItemBox>
      <ItemBox>
        <BsQuestionCircle></BsQuestionCircle>
        <KeyText> State Root: </KeyText>
        <ValueText>{itemInfo?.stateRoot}</ValueText>
      </ItemBox>
      <ItemBox>
        <BsQuestionCircle></BsQuestionCircle>
        <KeyText> Nonce: </KeyText>
        <ValueText>{itemInfo?.nonce}</ValueText>
      </ItemBox>
    </BlockBox>
  );
};

export default BlockBoxComponent;
const BlockBox = styled.div``;
const ItemBox = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
`;
const KeyText = styled.div`
  margin-left: 5px;
  flex: 10%;
`;
const ValueText = styled.div`
  flex: 4;
  color: black;
  display: flex;
  span {
    color: #4d83bd;
    cursor: pointer;
  }
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
