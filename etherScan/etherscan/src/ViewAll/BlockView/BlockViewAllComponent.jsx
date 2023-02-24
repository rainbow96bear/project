import styled from "styled-components";
import {
  ClickAbleSpan,
  ShowPastTime,
} from "../../customComponents/customComponent";

const BlockViewAllComponent = ({ itemInfo }) => {
  return (
    <>
      <Item className="block">
        <div>Block</div>
        <div>Age</div>
        <div>Txn</div>
        <div>Fee Recipient</div>
        <div>Gas Used</div>
        <div>Gas Limit</div>
      </Item>
      {itemInfo?.map((item, index) => (
        <Item key={`item-${index}`} className="block">
          <div>
            <ClickAbleSpan
              text={item.blockHeight}
              moveToWhere={`/Block/${item.blockHeight}`}></ClickAbleSpan>
          </div>
          <ShowPastTime createTime={item.timeStamp}></ShowPastTime>
          <div>{item.transactionNumber}</div>
          <div>
            <ClickAbleSpan
              text={item.feeRecipient}
              moveToWhere={`/address/${item.feeRecipient}`}></ClickAbleSpan>
          </div>
          <div>{item.gasUsed}</div>
          <div>{item.gasLimit}</div>
        </Item>
      ))}
    </>
  );
};
export default BlockViewAllComponent;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid lightgray;
  div {
    padding: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 2;
    max-width: 500px;
  }
`;
