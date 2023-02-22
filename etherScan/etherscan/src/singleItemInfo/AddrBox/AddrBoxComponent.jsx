import styled, { css } from "styled-components";

const AddrBoxComponent = ({ itemInfo, moveTo, value }) => {
  return (
    <AddrBox>
      <TotalInfo>{`A total of ${itemInfo.length} transactions`}</TotalInfo>
      <ItemBox>
        <Item>
          <div>Transaction Hash</div>
          <div>Block</div>
          <div>Age</div>
          <div>From</div>
          <div></div>
          <div>To</div>
          <div>Value</div>
        </Item>
      </ItemBox>
      {itemInfo?.map((item, index) => (
        <ItemBox key={`item-${index}`}>
          <Item>
            <div>
              <span
                onClick={() => {
                  moveTo(`/tx/${item.transactionHash}`);
                }}>
                {item.transactionHash}
              </span>
            </div>
            <div>
              <span
                onClick={() => {
                  moveTo(`/Block/${item.blockNumber}`);
                }}>
                {item.blockNumber}
              </span>
            </div>
            <div>{item.Block_Info.timeStamp}</div>
            <div>
              <span
                onClick={() => {
                  moveTo(`/address/${item.from}`);
                }}>
                {item.from}
              </span>
            </div>

            <div>
              <INnOUT color={value == item.from ? "OUT" : "IN"}>
                {value == item.from ? "OUT" : "IN"}
              </INnOUT>
            </div>
            <div>
              <span
                onClick={() => {
                  moveTo(`/address/${item.to}`);
                }}>
                {item.to}
              </span>
            </div>
            <div>{item.value}</div>
          </Item>
        </ItemBox>
      ))}
    </AddrBox>
  );
};
export default AddrBoxComponent;
const AddrBox = styled.div`
  max-width: 1400px;
`;
const TotalInfo = styled.div`
  font-weight: bold;
  padding: 0px 0px 10px 15px;
`;
const ItemBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
`;
const Item = styled.div`
  width: 100%;
  display: flex;
  // justify-content: space-between;
  border-top: 1px solid lightgray;
  > div {
    padding: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 20%;
  }
  span {
    color: #4d83bd;
    cursor: pointer;
  }
  & :nth-child(2) {
    width: 5%;
  }
  & :nth-child(3) {
    width: 5%;
  }
  & :nth-child(5) {
    width: 5%;
  }
`;
const INnOUT = styled.div`
  font-size: 12px;
  padding: 5px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  ${(props) =>
    props.color == "OUT"
      ? `color: #c39b37;
    background-color: #fdf6e3;
    border: 2px solid #faeabc;`
      : `
    color: #569EA3;
    background-color: #EEF5F3;
    border: 2px solid #C8E0D8;`}
`;
