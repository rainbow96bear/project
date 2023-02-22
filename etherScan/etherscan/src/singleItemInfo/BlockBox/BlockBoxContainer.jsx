import axios from "axios";
import { useEffect, useState } from "react";
import BlockBoxComponent from "./BlockBoxComponent";
const BlockBoxContainer = ({ itemInfo, moveTo, lastNumber }) => {
  return (
    <BlockBoxComponent
      itemInfo={itemInfo}
      moveTo={moveTo}
      lastNumber={lastNumber}></BlockBoxComponent>
  );
};
export default BlockBoxContainer;
