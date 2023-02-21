import MainComponent from "./MainComponent";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const MainContainer = () => {
  const [searchDropView, setSearchDropView] = useState(false);
  const navigate = useNavigate();
  const moveTo = (where) => {
    navigate(where);
  };
  const [blockInfo, setBlockInfo] = useState([]);
  const [transactionInfo, setTransactionInfo] = useState([]);
  const syncDB = async () => {
    await axios.post("/sync", { data: "동기화 요청" });
  };
  const getLatelyBlock = async () => {
    const data = await axios.post("/api/blockInfo/getLatelyBlock");
    setBlockInfo([...data.data.data]);
  };
  const getLatelyTransaction = async () => {
    const data = await axios.post("/api/transactionInfo/getLatelyTransaction");
    setTransactionInfo(data.data.data);
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
      searchDropView={searchDropView}
      setSearchDropView={setSearchDropView}></MainComponent>
  );
};
export default MainContainer;
