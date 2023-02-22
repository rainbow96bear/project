import styled from "styled-components";
import BlockViewAllContainer from "./BlockView/BlockViewAllContainer";

import PagingContainer from "./Paging/PagingContainer";
import TxViewAllContainer from "./TxView/TxViewAllContainer";

const ViewAllComponent = ({
  type,
  showRow,
  setShowRow,
  page,
  setPage,
  itemInfo,
  InfoLength,
  moveTo,
}) => {
  return (
    <ViewAllContainer>
      <ViewAllBox>
        <Title>{type == "blocks" ? "Blocks" : "Transactions"}</Title>
        <ItemBox>
          <Top>
            <Info>
              {itemInfo ? (
                type == "blocks" ? (
                  <>
                    <span>{`Total of blocks`}</span>
                    <span>{`(Showing blocks between ${
                      itemInfo[[showRow - 1]]?.blockHeight
                    } to  ${itemInfo[0]?.blockHeight} )`}</span>
                  </>
                ) : (
                  <>
                    <span>{`Transactions found`}</span>
                    <span>{`(Showing blocks between ${
                      itemInfo[[showRow - 1]]?.blockHeight
                    } to  ${itemInfo[0]?.blockHeight} )`}</span>
                  </>
                )
              ) : (
                <></>
              )}
            </Info>
            <PagingContainer
              page={page}
              setPage={setPage}
              InfoLength={InfoLength}></PagingContainer>
          </Top>
          {type == "blocks" && (
            <BlockViewAllContainer
              moveTo={moveTo}
              itemInfo={itemInfo}></BlockViewAllContainer>
          )}
          {type == "txs" && (
            <TxViewAllContainer
              moveTo={moveTo}
              itemInfo={itemInfo}></TxViewAllContainer>
          )}

          <Bottom>
            <div>
              <span>Show rows:</span>
              <select
                onChange={(e) => {
                  setShowRow(+e.target.value);
                }}>
                <option value={10}>10</option>
                <option value={20}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
            <PagingContainer
              page={page}
              setPage={setPage}
              InfoLength={InfoLength}></PagingContainer>
          </Bottom>
        </ItemBox>
      </ViewAllBox>
    </ViewAllContainer>
  );
};
export default ViewAllComponent;

const ViewAllContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ViewAllBox = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 1400px;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 21px;
  padding-bottom: 20px;
`;
const ItemBox = styled.div`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px lightgray;
  display: flex;
  flex-direction: column;
  & .block {
    div:nth-child(4) {
      flex: 9;
    }
  }
  & .tx {
    div:nth-child(2) {
      flex: 1;
    }
    div:nth-child(3) {
      flex: 1;
    }
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  & :nth-child(2) {
    color: gray;
    font-size: 13px;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    color: gray;
    padding: 5px;
  }
  select {
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 5px;
  }
`;
