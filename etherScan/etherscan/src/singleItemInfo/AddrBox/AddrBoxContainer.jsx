import AddrBoxComponent from "./AddrBoxComponent";
import { useParams } from "react-router-dom";

const AddrBoxContainer = ({ itemInfo }) => {
  const { value } = useParams();
  return (
    <AddrBoxComponent itemInfo={itemInfo} value={value}></AddrBoxComponent>
  );
};
export default AddrBoxContainer;
