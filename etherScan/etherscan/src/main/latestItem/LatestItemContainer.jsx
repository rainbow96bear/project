import LatestItemComponent from "./LatestItemComponent";
import { useEffect, useState } from "react";

const LatestItemContainer = ({ info, moveTo, type }) => {
  return (
    <LatestItemComponent
      moveTo={moveTo}
      info={info}
      type={type}></LatestItemComponent>
  );
};
export default LatestItemContainer;
