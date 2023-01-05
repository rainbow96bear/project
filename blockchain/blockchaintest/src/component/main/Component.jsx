import { SHA256 } from "crypto-js";
import { useEffect, useState } from "react";
import styled from "styled-components";

import DataItemContainer from "../dataItem/Container";

export default function MainComponent({
  dataArr,
  setDataArr,
  setNonce,
  nonce,
  setData,
  data,
  latelyHash,
  createHash,
  difficulty,
  setDifficulty,
  setAuto,
  auto,
  blockHashInfoArr,
}) {
  return (
    <ComponentBox>
      <FuncUI>
        <input
          placeholder="입력할 데이터"
          onChange={(e) => {
            setData(e.target.value);
          }}
          value={data}
          type={"text"}></input>
        <button
          onClick={() => {
            setDataArr([...dataArr, data]);
            setData("");
          }}>
          데이터 입력
        </button>
        <input
          type={"number"}
          onChange={(e) => {
            setNonce(e.target.value);
          }}
          value={nonce}></input>
        <button
          onClick={() => {
            setNonce(+nonce + 1);
          }}>
          논스 올리기
        </button>
        <input
          type={"number"}
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
          value={difficulty}></input>
        <button
          onClick={() => {
            createHash();
          }}>
          블록 생성하기
        </button>
      </FuncUI>
      <DataBox>
        <DataItemContainer dataArr={dataArr}></DataItemContainer>
      </DataBox>
      {blockHashInfoArr.map((item, index) => (
        <BlockBox key={`blockHash-${index}`}>
          <div>hash : {item.thisHash}</div>
          <div>version : {item.version}</div>
          <div>previousHash : {item.previousHash}</div>
          <div>merkleRoot : {item.merkleRoot}</div>
          <div>nonce : {item.nonce}</div>
          <div>timeStamp : {item.timeStamp}</div>
          <div>height : {item.height}</div>
        </BlockBox>
      ))}
    </ComponentBox>
  );
}
const ComponentBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const FuncUI = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const DataBox = styled.div`
  flex: 1;
  border: 1px solid black;
`;
const BlockBox = styled.div`
  border: 1px solid black;
`;
