import LatestItemComponent from "./LatestItemComponent";
import { useEffect, useState } from "react";

const LatestItemContainer = ({ info, type }) => {
  return <LatestItemComponent info={info} type={type}></LatestItemComponent>;
};
export default LatestItemContainer;
