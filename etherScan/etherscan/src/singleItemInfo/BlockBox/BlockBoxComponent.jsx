import styled from "styled-components";

const BlockBoxComponent = ({ itemInfo }) => {
  return (
    <BlockBox>
      <ItemBox>
        <KeyText>Block Height: </KeyText>
        <ValueText>{itemInfo?.blockHeight}</ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>Timestamp: </KeyText>
        <ValueText>{itemInfo?.timeStamp}</ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>Transactions: </KeyText>
        <ValueText>{itemInfo?.transactionNumber}</ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>Size: </KeyText>
        <ValueText>{itemInfo?.size}</ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>Gas Used: </KeyText>
        <ValueText>{itemInfo?.gasUsed}</ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>Gas Limit: </KeyText>
        <ValueText>{itemInfo?.gasLimit}</ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>Extra Data: </KeyText>
        <ValueText>{itemInfo?.extraData}</ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>Hash: </KeyText>
        <ValueText>{itemInfo?.hash}</ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>Parent Hash: </KeyText>
        <ValueText>{itemInfo?.parentHash}</ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>State Root: </KeyText>
        <ValueText>{itemInfo?.stateRoot}</ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>Nonce: </KeyText>
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
`;
const KeyText = styled.div`
  flex: 1;
`;
const ValueText = styled.div`
  flex: 4;
`;
