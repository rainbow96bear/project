import styled from "styled-components";

const TxViewAllComponent = ({ itemInfo, moveTo }) => {
  return (
    <>
      <Item className="tx">
        <div>Txn Hash</div>
        <div>Block</div>
        <div>Age</div>
        <div>From</div>
        <div>To</div>
        <div>Value</div>
      </Item>
      {itemInfo?.map((item, index) => (
        <Item key={`item-${index}`} className="tx">
          <div
            onClick={() => {
              moveTo(`/tx/${item.transactionHash}`);
            }}>
            <span>{item.transactionHash}</span>
          </div>
          <div
            onClick={() => {
              moveTo(`/Block/${item.blockNumber}`);
            }}>
            <span>{item.blockNumber}</span>
          </div>
          <div>{item?.Block_Info.timeStamp}</div>
          <div>{item.from}</div>
          <div>{item.to}</div>
          <div>{item.value}</div>
        </Item>
      ))}
    </>
  );
};
export default TxViewAllComponent;

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
