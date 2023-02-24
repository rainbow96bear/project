import styled from "styled-components";
import {
  ClickAbleSpan,
  ShowPastTime,
  WeiToEth,
} from "../../customComponents/customComponent";

const TxBoxComponent = ({ itemInfo }) => {
  return (
    <TxBox>
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
        <ValueText>
          <ClickAbleSpan
            text={itemInfo?.blockNumber}
            moveToWhere={`/Block/${itemInfo?.blockNumber}`}></ClickAbleSpan>
        </ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>Timestamp: </KeyText>
        <ValueText>
          <ShowPastTime
            createTime={itemInfo?.Block_Info?.timeStamp}></ShowPastTime>
        </ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>From: </KeyText>
        <ValueText>
          <ClickAbleSpan
            text={itemInfo.from}
            moveToWhere={`/address/${itemInfo.from}`}></ClickAbleSpan>
        </ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>To: </KeyText>
        <ValueText>
          <ClickAbleSpan
            text={itemInfo.to}
            moveToWhere={`/address/${itemInfo.to}`}></ClickAbleSpan>
        </ValueText>
      </ItemBox>
      <ItemBox>
        <KeyText>Value: </KeyText>
        <ValueText>
          <WeiToEth wei={itemInfo?.value}></WeiToEth>
        </ValueText>
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
    </TxBox>
  );
};
export default TxBoxComponent;
const TxBox = styled.div``;
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
