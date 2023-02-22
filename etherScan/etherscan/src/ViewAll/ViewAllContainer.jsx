import ViewAllComponent from "./ViewAllComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ViewAllContainer = ({ moveTo }) => {
  const { type } = useParams();
  const [showRow, setShowRow] = useState(10);
  const [page, setPage] = useState(1);
  const [itemInfo, setItemInfo] = useState();
  const [InfoLength, setInfoLength] = useState(1);
  const getAllInfo = async (type, page, showRow) => {
    const { data } = await axios.post("/api/getAllInfo", {
      type,
      page,
      showRow,
    });
    setItemInfo(data.data);
    setInfoLength(Math.ceil(data.dataLength / showRow));
  };
  useEffect(() => {
    getAllInfo(type, page, showRow);
  }, [page, showRow]);

  return (
    <ViewAllComponent
      type={type}
      showRow={showRow}
      setShowRow={setShowRow}
      setPage={setPage}
      page={page}
      itemInfo={itemInfo}
      InfoLength={InfoLength}
      getAllInfo={getAllInfo}
      moveTo={moveTo}></ViewAllComponent>
  );
};
export default ViewAllContainer;
