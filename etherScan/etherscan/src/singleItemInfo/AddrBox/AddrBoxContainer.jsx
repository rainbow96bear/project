import AddrBoxComponent from "./AddrBoxComponent";
import { useParams } from "react-router-dom";

const AddrBoxContainer = ({ itemInfo, moveTo }) => {
  const { value } = useParams();
  return (
    <AddrBoxComponent
      itemInfo={itemInfo}
      moveTo={moveTo}
      value={value}></AddrBoxComponent>
  );
};
export default AddrBoxContainer;
