import styled from "styled-components";
import { BsBox, BsFileText } from "react-icons/bs";
import {
  ClickAbleSpan,
  ShowPastTime,
} from "../../customComponents/customComponent";

const LatestItemComponent = ({ info, type }) => {
  return (
    <ItemBox>
      <ImgBox>
        <div>
          {type == "block" ? <BsBox></BsBox> : <BsFileText></BsFileText>}
        </div>
      </ImgBox>
      <InfoBox type={type}>
        <div>
          <div>
            <ClickAbleSpan
              text={type == "block" ? info?.blockHeight : info?.transactionHash}
              moveToWhere={
                type == "block"
                  ? `/Block/${info?.blockHeight}`
                  : `/tx/${info?.transactionHash}`
              }></ClickAbleSpan>
          </div>
          <ShowPastTime
            createTime={
              type == "block" ? info?.timeStamp : info?.Block_Info?.timeStamp
            }></ShowPastTime>
        </div>
        <div>
          {type == "block" && (
            <>
              <div>
                Fee Recipient{" "}
                <ClickAbleSpan
                  text={info?.miner}
                  moveToWhere={`/address/${info?.miner}`}></ClickAbleSpan>
              </div>

              <div>
                <span title="Transactions in this Block">
                  {info?.transactionNumber} txns
                </span>{" "}
                in 12secs
              </div>
            </>
          )}
          {type == "transaction" && (
            <>
              <div>
                To{" "}
                <ClickAbleSpan
                  text={info?.to}
                  moveToWhere={`/address/${info?.from}`}></ClickAbleSpan>
              </div>
              <div>
                From Recipient{" "}
                <ClickAbleSpan
                  text={info?.from}
                  moveToWhere={`/address/${info?.from}`}></ClickAbleSpan>
              </div>
            </>
          )}
        </div>
      </InfoBox>
    </ItemBox>
  );
};
export default LatestItemComponent;
const ItemBox = styled.div`
  padding: 10px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`;
const ImgBox = styled.div`
  width: 5%;
  display: flex;
  justify-content: center;
  padding: 3px;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: lightgray;
  }
`;
const InfoBox = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  > div {
    display: flex;
    flex-direction: column;
  }
  div {
    ${({ type }) =>
      type == "block"
        ? ``
        : `
      max-width: 300px;
     
    `}
    padding: 2px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
