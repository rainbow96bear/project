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
      <InfoBox type={type}>
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
          {type == "block" && (
            <>
              <div>
                Fee Recipient{" "}
                <span
                  onClick={() => {
                    moveTo(`/address/${info?.miner}`);
                  }}>
                  {info?.miner}
                </span>
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
                <span
                  onClick={() => {
                    moveTo(`/address/${info?.from}`);
                  }}>
                  {info?.to}
                </span>
              </div>
              <div>
                From Recipient{" "}
                <span
                  onClick={() => {
                    moveTo(`/address/${info?.from}`);
                  }}>
                  {info?.from}
                </span>
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
  span {
    color: #4d83ca;
    cursor: pointer;
  }
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
