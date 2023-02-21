import styled from "styled-components";
import LatestItemContainer from "./latestItem/LatestItemContainer";
import { BsArrowRight } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
const MainComponent = ({
  moveTo,
  blockInfo,
  transactionInfo,
  searchDropView,
  setSearchDropView,
}) => {
  return (
    <MainArea>
      <TopBannerArea>
        <HomeBtn>홈 버튼</HomeBtn>
        <DropDownFunction>
          home Blockchain Tokens NFTs Resources Developers More
        </DropDownFunction>
      </TopBannerArea>
      <SearchArea>
        <SearchBox>
          <div>
            <div>The Ethereum Blockchain Explorer</div>
            <SearchInputBox>
              <select className="borderNone">
                <option value={""}>All Filters</option>
                <option value={"Addresses"}>Addresses</option>
                <option value={"Tokens"}>Tokens</option>
                <option value={"Name"}>Name Tags</option>
                <option value={"Labels"}>Labels</option>
                <option value={"Websites"}>Websites</option>
              </select>
              <input className="borderNone"></input>
              <button className="borderNone">
                <FaSearch></FaSearch>
              </button>
            </SearchInputBox>
            <div>
              Sponsored: Hot games, huge winnings, welcome bonus up to $1000.
              Register now!
            </div>
          </div>

          <img src="https://etherscan.io/images/gen/bcgame_home_321x101.png"></img>
        </SearchBox>
      </SearchArea>
      <LatestInfoArea>
        <LatestInfoBox>
          <div>
            <Title>
              <span>Latest Blocks</span>
            </Title>
            {blockInfo?.map((info, index) => (
              <LatestItemContainer
                key={`blockItem-${index}`}
                info={info}
                moveTo={moveTo}
                type={"block"}></LatestItemContainer>
            ))}
            <FuncBox>
              <span
                onClick={() => {
                  moveTo("/block");
                }}>
                VIEW ALL BLOCKS{" "}
              </span>
              <BsArrowRight color="gray"></BsArrowRight>
            </FuncBox>
          </div>
          <div>
            <Title>
              <span>Latest Transactions</span>
            </Title>

            {transactionInfo?.map((info, index) => (
              <LatestItemContainer
                key={`transactionItem-${index}`}
                info={info}
                moveTo={moveTo}
                type={"transaction"}></LatestItemContainer>
            ))}
            <FuncBox>
              <span
                onClick={() => {
                  moveTo("/tx");
                }}>
                VIEW ALL TRANSACTIONS{" "}
              </span>
              <BsArrowRight color="gray"></BsArrowRight>
            </FuncBox>
          </div>
        </LatestInfoBox>
      </LatestInfoArea>
    </MainArea>
  );
};
export default MainComponent;
const MainArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TopBannerArea = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  background-color: yellow;
`;
const HomeBtn = styled.button``;
const DropDownFunction = styled.div``;
const SearchArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const SearchBox = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 10px;
  display: flex;
  & > div {
    padding: 10px;
    flex: 9;
  }
  & > img {
    flex: 1;
    padding: 10px;
    border-radius: 15px;
  }
`;
const SearchInputBox = styled.form`
  width: fit-content;
  padding: 5px;
  display: flex;
  background-color: white;
  border-radius: 5px;
  .borderNone {
    padding: 10px;
    border: none;
  }
  input {
    width: 500px;
  }
  button {
    display: flex;
    align-items: center;
    background-color: #4d83bd;
    color: white;
    border-radius: 10px;
  }
`;

const LatestInfoArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const LatestInfoBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  & > div {
    width: 50%;
    margin: 10px;
    box-shadow: 2px 2px 2px 2px gray;
    background-color: white;
    border-radius: 5px;
  }
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;

  span {
    font-weight: bold;
  }
`;
const FuncBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  span {
    font-weight: bold;
    color: gray;
  }
`;
