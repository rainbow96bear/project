import MainComponent from "./Component";

import { useEffect, useState } from "react";
import SHA256 from "crypto-js/sha256";
const Container = () => {
  const [dataArr, setDataArr] = useState([]);
  const [data, setData] = useState("");
  const [nonce, setNonce] = useState(0);
  const [difficulty, setDifficulty] = useState(1);
  const [latelyHash, setLatelyHash] = useState(
    "0000000000000000000000000000000000000000000000000000000000000000"
  );
  const [checkHash, setcheckHash] = useState("");
  const [height, setHeight] = useState(0);
  const [version, setVersion] = useState("1.0.0");
  const [auto, setAuto] = useState(false);
  const [blockHashInfoArr, setBlockHashInfoArr] = useState([]);
  const [blockInfo, setblockInfo] = useState({
    version: "1.0.0",
    previousHash: latelyHash,
    merkleRoot:
      "0000000000000000000000000000000000000000000000000000000000000000",
    nonce: 0,
    timeStamp: 0,
    height: 0,
  });

  const createMerkle = (transaction) => {
    if (!Array.isArray(transaction)) {
      return "배열이 아닙니다.";
    } else {
      let merkleArr = transaction.map((item) =>
        SHA256(item).toString().toUpperCase()
      );
      while (merkleArr.length > 1) {
        const tempArr = [];
        for (let i = 0; i < merkleArr.length; i += 2) {
          if (i + 1 === merkleArr.length) {
            tempArr.push(merkleArr[i]);
          } else {
            tempArr.push(
              SHA256(merkleArr[i] + merkleArr[i + 1])
                .toString()
                .toLocaleUpperCase()
            );
          }
        }
        merkleArr = tempArr;
      }
      return merkleArr[0];
    }
  };
  const createHash = () => {
    setblockInfo({
      version: version,
      previousHash: latelyHash,
      merkleRoot: createMerkle(dataArr),
      nonce: nonce,
      timeStamp: Date.now(),
      height: height,
    });
  };
  useEffect(() => {
    const values = Object.values(blockInfo);
    const data = values.join("");
    setcheckHash(SHA256(data).toString().toUpperCase());
  }, [blockInfo]);

  useEffect(() => {
    if (+checkHash.slice(0, difficulty) === 0) {
      console.log("맞았다.");
      setHeight(+height + 1);
      setNonce(0);
      blockInfo.thisHash = checkHash;
      setBlockHashInfoArr([...blockHashInfoArr, blockInfo]);
      setLatelyHash(checkHash);
      setDataArr([]);
    } else {
      console.log("틀렸다.");
    }
  }, [checkHash]);

  useEffect(() => {
    createHash();
  }, [nonce]);

  return (
    <MainComponent
      dataArr={dataArr}
      setDataArr={setDataArr}
      createMerkle={createMerkle}
      setNonce={setNonce}
      nonce={nonce}
      setData={setData}
      data={data}
      setLatelyHash={setLatelyHash}
      createHash={createHash}
      difficulty={difficulty}
      setDifficulty={setDifficulty}
      setAuto={setAuto}
      auto={auto}
      blockHashInfoArr={blockHashInfoArr}></MainComponent>
  );
  // return <div>adsf</div>;
};
export default Container;
