import styled from "styled-components";
import {
  ClickAbleSpan,
  ShowPastTime,
  WeiToEth,
} from "../../customComponents/customComponent";

const TxViewAllComponent = ({ itemInfo }) => {
  return (
    <Scroll>
      <Item>
        <div>Txn Hash</div>
        <div>Block</div>
        <div>Age</div>
        <div>From</div>
        <div>To</div>
        <div>Value</div>
      </Item>
      {itemInfo?.map((item, index) => (
        <Item key={`item-${index}`}>
          <div>
            <ClickAbleSpan
              text={item.transactionHash}
              moveToWhere={`/tx/${item.transactionHash}`}></ClickAbleSpan>
          </div>
          <div>
            <ClickAbleSpan
              text={item.blockNumber}
              moveToWhere={`/Block/${item.blockNumber}`}></ClickAbleSpan>
          </div>
          <ShowPastTime
            createTime={item ? item?.Block_Info.timeStamp : 0}></ShowPastTime>
          <div>
            <ClickAbleSpan
              text={item.from}
              moveToWhere={`/address/${item.from}`}></ClickAbleSpan>
          </div>
          <div>
            <ClickAbleSpan
              text={item.to}
              moveToWhere={`/address/${item.to}`}></ClickAbleSpan>
          </div>
          <WeiToEth wei={item.value}></WeiToEth>
        </Item>
      ))}
    </Scroll>
  );
};
export default TxViewAllComponent;
const Scroll = styled.div`
  overflow-y: hidden;
  overflow-x: scroll;
`;
const Item = styled.div`
  display: flex;
  width: 130%;
  div {
    margin: auto;
    border-top: 1px solid lightgray;
    padding: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
  & > :nth-child(2) {
    width: 250px;
  }
  & > :nth-child(3) {
    max-width: 150px;
  }
  & > :nth-child(6) {
    width: 500px;
  }
`;
