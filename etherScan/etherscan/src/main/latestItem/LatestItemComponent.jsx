import styled from "styled-components";
import { BsBox, BsFileText } from "react-icons/bs";

const LatestItemComponent = ({ info, moveTo, type }) => {
  return (
    <ItemBox>
      <ImgBox>
        <div>
          {type == "block" ? <BsBox></BsBox> : <BsFileText></BsFileText>}
        </div>
      </ImgBox>
      <InfoBox>
        <div>
          <div
            onClick={() => {
              type == "block"
                ? moveTo(`/Block/${info?.blockHeight}`)
                : moveTo(`/tx/${info?.transactionHash}`);
            }}>
            <span>
              {type == "block" ? info?.blockHeight : info?.transactionHash}
            </span>
          </div>
          <div>
            {type == "block" ? info?.timeStamp : info?.Block_Info?.timeStamp}
          </div>
        </div>
        <div>
          <div>
            {type == "block" ? (
              <>
                Fee Recipient{" "}
                <span
                  onClick={() => {
                    moveTo(`/address/${info?.miner}`);
                  }}>
                  {info?.miner}
                </span>
              </>
            ) : (
              <>
                From Recipient{" "}
                <span
                  onClick={() => {
                    moveTo(`/address/${info?.from}`);
                  }}>
                  {info?.from}
                </span>
              </>
            )}
          </div>
          <div>
            {type == "block" ? (
              <>
                <span title="Transactions in this Block">
                  {info?.transactionNumber} txns
                </span>{" "}
                in 12secs
              </>
            ) : (
              <>
                To{" "}
                <span
                  onClick={() => {
                    moveTo(`/address/${info?.from}`);
                  }}>
                  {info?.to}
                </span>
              </>
            )}
          </div>
        </div>
      </InfoBox>
    </ItemBox>
  );
};
export default LatestItemComponent;
const ItemBox = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  span {
    color: #4d83ca;
    cursor: pointer;
  }
`;
const ImgBox = styled.div`
  width: 5%;
  display: flex;
  justify-content: center;
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
  width: 90%;
  justify-content: space-between;
  & > div {
    display: flex;
    flex-direction: column;
  }
  > :nth-child(1) {
    width: 20%;
  }
  > :nth-child(2) {
    width: 70%;
  }
  div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
