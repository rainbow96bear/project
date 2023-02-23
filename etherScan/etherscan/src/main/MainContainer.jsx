import MainComponent from "./MainComponent";
import axios from "axios";
import { useEffect, useState } from "react";
const MainContainer = ({ moveTo }) => {
  const [keyWord, setKeyWord] = useState("");
  const [blockInfo, setBlockInfo] = useState([]);
  const [transactionInfo, setTransactionInfo] = useState([]);
  const syncDB = async () => {
    await axios.post("/sync", { data: "동기화 요청" });
  };
  const getLatelyBlock = async () => {
    const data = await axios.post("/api/blockInfo/getLatelyBlock", blockInfo);
    setBlockInfo([...data.data.data]);
  };
  const getLatelyTransaction = async () => {
    const data = await axios.post("/api/transactionInfo/getLatelyTransaction");
    setTransactionInfo(data.data.data);
  };
  const search = async (keyWord) => {
    const { data } = await axios.post("/api/search/byKeyword", { keyWord });
    if (data.where == "404") {
      moveTo(`/404`);
    } else {
      moveTo(`/${data.where}/${data.value}`);
    }
  };
  useEffect(() => {
    syncDB();
    getLatelyBlock();
    getLatelyTransaction();
  }, []);
  return (
    <MainComponent
      moveTo={moveTo}
      blockInfo={blockInfo}
      transactionInfo={transactionInfo}
      keyWord={keyWord}
      setKeyWord={setKeyWord}
      search={search}></MainComponent>
  );
};
export default MainContainer;
