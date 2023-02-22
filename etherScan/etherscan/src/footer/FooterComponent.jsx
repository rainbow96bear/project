import styled from "styled-components";
import { BsFacebook, BsMedium, BsReddit, BsTwitter } from "react-icons/bs";
import { BiArrowToTop } from "react-icons/bi";

const FooterComponent = ({ handleTop, moveTo }) => {
  return (
    <FooterArea>
      <FooterBox>
        <FunctionArea>
          <SNSArea>
            <IconBox
              title="Twiter"
              onClick={() => {
                moveTo("https://twitter.com/etherscan");
              }}>
              <BsTwitter></BsTwitter>
            </IconBox>
            <IconBox
              title="Medium"
              onClick={() => {
                moveTo("https://medium.com/etherscan-blog");
              }}>
              <BsMedium></BsMedium>
            </IconBox>
            <IconBox
              title="Facebook"
              onClick={() => {
                moveTo("https://www.facebook.com/etherscan/");
              }}>
              <BsFacebook></BsFacebook>
            </IconBox>
            <IconBox
              title="Reddits"
              onClick={() => {
                moveTo("https://www.reddit.com/r/etherscan/");
              }}>
              <BsReddit></BsReddit>
            </IconBox>
          </SNSArea>
          <ToTopBtn
            onClick={() => {
              handleTop();
            }}>
            <BiArrowToTop></BiArrowToTop>Back to Top
          </ToTopBtn>
        </FunctionArea>
        <SiteInfo>
          <FooterTitle>
            <img src="https://etherscan.io/images/svg/brands/ethereum-original.svg"></img>
            <span>Powered by Ethereum</span>
          </FooterTitle>
          <div>
            Etherscan is a Block Explorer and Analytics Platform for Ethereum, a
            decentralized smart contracts platform.
          </div>
        </SiteInfo>
      </FooterBox>
    </FooterArea>
  );
};
export default FooterComponent;
const FooterArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const FooterBox = styled.div`
  padding: 10px;
`;
const FunctionArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;
`;
const SNSArea = styled.div`
  display: flex;
`;
const IconBox = styled.div`
  width: 30px;
  height: 30px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #e5e5e5;
  cursor: pointer;
`;
const ToTopBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const SiteInfo = styled.div`
  width: 100%;
  padding: 10px;
`;
const FooterTitle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  img {
    margin-right: 10px;
    width: 20px;
  }
  span {
    font-weight: bold;
    font-size: 20px;
  }
`;
