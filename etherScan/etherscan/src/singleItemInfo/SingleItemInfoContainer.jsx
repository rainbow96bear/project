import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleItemInfoComponent from "./SingleItemInfoComponent";
import axios from "axios";

const SingleItemInfoContainer = ({ type, moveTo }) => {
  const { value } = useParams();

  const [itemInfo, setItemInfo] = useState([]);
  const [lastNumber, setLastNumber] = useState();
  const getInfo = async (type, value) => {
    const { data } = await axios.post(`/api/getInfo`, {
      type,
      value,
    });
    setItemInfo(data.data);
  };
  const getLastNumber = async () => {
    const { data } = await axios.post("/api/blockInfo/getLastNumber");
    setLastNumber(data);
  };

  useEffect(() => {
    getInfo(type, value);
  }, [value]);
  useEffect(() => {
    getLastNumber();
  }, []);

  return (
    <SingleItemInfoComponent
      itemInfo={itemInfo}
      lastNumber={lastNumber}
      type={type}
      value={value}
      moveTo={moveTo}></SingleItemInfoComponent>
  );
};
export default SingleItemInfoContainer;
