import TxViewAllComponent from "./TxViewAllComponent";
const TxViewAllContainer = ({ moveTo, itemInfo }) => {
  return (
    <TxViewAllComponent
      itemInfo={itemInfo}
      moveTo={moveTo}></TxViewAllComponent>
  );
};
export default TxViewAllContainer;
