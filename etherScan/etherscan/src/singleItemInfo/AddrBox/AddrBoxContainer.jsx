import AddrBoxComponent from "./AddrBoxComponent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
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
