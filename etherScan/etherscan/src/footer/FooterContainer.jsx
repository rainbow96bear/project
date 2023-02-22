import FooterComponent from "./FooterComponent";

const FooterContainer = ({ moveTo }) => {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterComponent handleTop={handleTop} moveTo={moveTo}></FooterComponent>
  );
};
export default FooterContainer;
