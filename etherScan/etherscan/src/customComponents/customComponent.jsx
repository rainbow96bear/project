import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ClickAbleSpan = ({ text, moveToWhere }) => {
  const navigate = useNavigate();
  const moveTo = (where) => {
    navigate(where);
  };
  return (
    <TitleSpan
      title={text}
      onClick={() => {
        moveTo(moveToWhere);
      }}>
      {text}
    </TitleSpan>
  );
};
const ShowPastTime = ({ createTime }) => {
  const thisTime = new Date();
  const time = new Date(createTime * 1000);
  const pastTime = new Date(thisTime - createTime * 1000);
  let past = "";
  let year = time.getFullYear();
  let month = time.getMonth();
  let date = time.getDate();
  let hour = time.getHours();
  let min = time.getMinutes();
  if (pastTime.getFullYear() - 1970 == 1) {
    past = "1year";
  } else if (pastTime.getFullYear() - 1970 > 1) {
    past = `${pastTime.getFullYear()}years`;
  } else if (pastTime.getMonth() == 1) {
    past = "1month";
  } else if (pastTime.getMonth() > 1) {
    past = `${pastTime.getMonth()}months`;
  } else if (pastTime.getDate() == 1) {
    past = `1day`;
  } else if (pastTime.getDate() > 1) {
    past = `${pastTime.getDate()}days`;
  } else if (pastTime.getHours() == 1) {
    past = `1hour`;
  } else if (pastTime.getHours() > 1) {
    past = `${pastTime.getHours()}hours`;
  } else if (pastTime.getMinutes() == 1) {
    past = `min`;
  } else if (pastTime.getMinutes() > 1) {
    past = `${pastTime.getMinutes()}mins`;
  } else {
    past = `${pastTime % 6000}secs`;
  }

  return (
    <TimeDiv title={`${year}-${month}-${date} ${hour}:${min}`}>
      {past} ago
    </TimeDiv>
  );
};
const WeiToEth = ({ wei }) => {
  const eth = parseInt(wei / Math.pow(10, 9)) / Math.pow(10, 9);
  return <div>{eth} ETH</div>;
};

export { ClickAbleSpan, ShowPastTime, WeiToEth };
const TitleSpan = styled.span`
  color: #4d83bd;
  cursor: pointer;
`;

const TimeDiv = styled.div``;
