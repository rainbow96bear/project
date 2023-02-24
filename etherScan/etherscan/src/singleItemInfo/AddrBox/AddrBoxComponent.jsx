import { useEffect } from "react";
import styled from "styled-components";
import {
  ClickAbleSpan,
  ShowPastTime,
  WeiToEth,
} from "../../customComponents/customComponent";
const AddrBoxComponent = ({ itemInfo, value }) => {
  useEffect(() => {
    console.log(itemInfo.length);
    console.log(typeof itemInfo);
  }, [value, itemInfo]);
  return (
    <AddrBox>
      <TotalInfo>{`A total of ${itemInfo?.length} transactions`}</TotalInfo>
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
      {itemInfo.length != undefined
        ? itemInfo?.map((item, index) => (
            <ItemBox key={`item-${index}`}>
              <Item>
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
                  createTime={item.Block_Info.timeStamp}></ShowPastTime>
                <div>
                  <ClickAbleSpan
                    text={item.from}
                    moveToWhere={`/address/${item.from}`}></ClickAbleSpan>
                </div>

                <div>
                  <INnOUT color={value == item.from ? "OUT" : "IN"}>
                    {value == item.from ? "OUT" : "IN"}
                  </INnOUT>
                </div>
                <div>
                  <ClickAbleSpan
                    text={item.to}
                    moveToWhere={`/address/${item.to}`}></ClickAbleSpan>
                </div>
                <WeiToEth wei={item.value}></WeiToEth>
              </Item>
            </ItemBox>
          ))
        : ""}
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
`;
const Item = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid lightgray;
  > div {
    padding: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 23%;
  }

  & :nth-child(2) {
    width: 7%;
  }
  & :nth-child(3) {
    width: 7%;
  }
  & :nth-child(5) {
    width: 7%;
  }
  & :nth-child(7) {
    width: 10%;
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
