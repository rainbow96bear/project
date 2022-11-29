import { connect } from "react-redux";

import MainPostScreen from "./MainPostScreen";

function MainPostScreenContainer({ post }) {
  return <MainPostScreen post={post}></MainPostScreen>;
}

const mapStateToProps = (state, props) => {
  return { post: state.post };
};
const mapDispatchToProps = (dispatch) => {
  return;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPostScreenContainer);
