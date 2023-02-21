import { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import SingleItemInfoComponent from "./SingleItemInfoComponent";
import axios from "axios";

const SingleItemInfoContainer = ({ type }) => {
  const { value } = useParams();
  const [blockInfo, setBlockInfo] = useState([
    "Block Height:",
    "Timestamp:",
    "Transactions:",
    "Total Difficulty:",
    "Size:",
    "Gas Used",
    "Gas Limit",
    "Extra Data:",
    "Hash:",
    "Parent Hash:",
    "State Root",
    "Nonce:",
  ]);
  const [txInfo, settxInfo] = useState([
    "Transaction Hash:",
    "Status:",
    "Block:",
    "Timestamp:",
    "From:",
    "Interacted With (To):",
    "Value:",
    "Gas Price:",
  ]);
  const [itemInfo, setItemInfo] = useState({});

  const getInfo = async (type, value) => {
    const { data } = await axios.post(`/api/getInfo`, {
      type,
      value,
    });
    setItemInfo(data.data);
  };
  useEffect(() => {
    getInfo(type, value);
  }, []);
  return (
    <SingleItemInfoComponent
      blockInfo={blockInfo}
      txInfo={txInfo}
      itemInfo={itemInfo}
      type={type}
      value={value}></SingleItemInfoComponent>
  );
};
export default SingleItemInfoContainer;
