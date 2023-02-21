import styled from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import BlockBoxContainer from "./BlockBox/BlockBoxContainer";
import TxBoxContainer from "./TxBox/TxBoxContainer";

const SingleItemInfoComponent = ({
  blockInfo,
  txInfo,
  itemInfo,
  type,
  value,
}) => {
  return (
    <ItemContainer>
      <ItemBox>
        <Title>
          {type == "block" ? (
            <>
              Block <span>#{value}</span>
            </>
          ) : (
            <>
              Transaction Details
              <button>
                <BsChevronLeft></BsChevronLeft>
              </button>
              <button>
                <BsChevronRight></BsChevronRight>
              </button>
            </>
          )}
        </Title>
        <InfoBox>
          {type == "block" ? (
            <BlockBoxContainer itemInfo={itemInfo}></BlockBoxContainer>
          ) : (
            <TxBoxContainer itemInfo={itemInfo}></TxBoxContainer>
          )}
        </InfoBox>
      </ItemBox>
    </ItemContainer>
  );
};
export default SingleItemInfoComponent;
const ItemContainer = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 1400px;
`;
const ItemBox = styled.div`
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px gray;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-weight: bold;
  padding: 10px;
`;
const InfoBox = styled.div``;
