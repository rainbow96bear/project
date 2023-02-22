import styled from "styled-components";

const BlockViewAllComponent = ({ itemInfo, moveTo }) => {
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
          <div
            onClick={() => {
              moveTo(`/Block/${item.blockHeight}`);
            }}>
            <span>{item.blockHeight}</span>
          </div>
          <div>{item.timeStamp}</div>
          <div>{item.transactionNumber}</div>
          <div>{item.feeRecipient}</div>
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
  span {
    color: #4d83bd;
    cursor: pointer;
  }
`;
