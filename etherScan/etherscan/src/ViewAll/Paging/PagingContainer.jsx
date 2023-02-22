import PagingComponent from "./PagingComponent";

const PagingContainer = ({ page, setPage, InfoLength }) => {
  return (
    <PagingComponent
      page={page}
      setPage={setPage}
      InfoLength={InfoLength}></PagingComponent>
  );
};

export default PagingContainer;
