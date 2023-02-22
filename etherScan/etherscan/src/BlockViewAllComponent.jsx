import styled from "styled-components";

const BlockViewAllComponent = ({ itemInfo, moveTo }) => {
  return (
    <AddrBox>
      <ItemBox>
        <KeyText>Transaction Hash: </KeyText>
        <ValueText>{itemInfo?.transactionHash}</ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>Status: </KeyText>
        <ValueText>양호호</ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>Block: </KeyText>
        <ValueText
          onClick={() => {
            moveTo(`/Block/${itemInfo?.blockNumber}`);
          }}>
          <span>{itemInfo?.blockNumber}</span>
        </ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>Timestamp: </KeyText>
        <ValueText>{itemInfo?.Block_Info?.timeStamp}</ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>From: </KeyText>
        <ValueText>{itemInfo?.from}</ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>To: </KeyText>
        <ValueText>{itemInfo?.to}</ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>Value: </KeyText>
        <ValueText>{itemInfo?.value}</ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>Transaction Fee: </KeyText>
        <ValueText>{itemInfo?.gas}</ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>Gas Price: </KeyText>
        <ValueText>{itemInfo?.gasPrice}</ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>Gas Limit: </KeyText>
        <ValueText>{itemInfo?.Block_Info?.gasLimit}</ValueText>
      </ItemBox>
    </AddrBox>
  );
};
export default BlockViewAllComponent;

const AddrBox = styled.div``;
const ItemBox = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const KeyText = styled.div`
  flex: 1;
`;
const ValueText = styled.div`
  flex: 4;
  span {
    color: #4d83bd;
    cursor: pointer;
  }
`;
