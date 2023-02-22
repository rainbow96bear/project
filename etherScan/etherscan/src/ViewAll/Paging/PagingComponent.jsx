import styled from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const PagingComponent = ({ page, setPage, InfoLength }) => {
  return (
    <PagingBox>
      <Item
        onClick={() => {
          if (page != 1) {
            setPage(1);
          }
        }}>
        First
      </Item>
      <Item
        onClick={() => {
          if (page > 1) {
            setPage(--page);
          }
        }}>
        <BsChevronLeft></BsChevronLeft>
      </Item>
      <Item>{`Page ${page} of ${InfoLength}`}</Item>
      <Item
        onClick={() => {
          if (page < InfoLength) {
            setPage(++page);
          }
        }}>
        <BsChevronRight></BsChevronRight>
      </Item>
      <Item
        onClick={() => {
          if (page != InfoLength - 1) {
            setPage(InfoLength);
          }
        }}>
        Last
      </Item>
    </PagingBox>
  );
};
export default PagingComponent;
const PagingBox = styled.div`
  display: flex;
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  color: gray;
  font-size: 13px;
  font-weight: bold;
  margin: 2px;
  padding: 3px;
  border: 1px solid #lightgray;
  border-radius: 2px;
  background-color: #e5e5e5;
`;
