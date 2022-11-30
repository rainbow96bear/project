import { connect } from "react-redux";

import { action } from "../../modules/nowPost";
import MainPostScreen from "./MainPostScreen";

function MainPostScreenContainer({ post, selectPost }) {
  return <MainPostScreen post={post} selectPost={selectPost}></MainPostScreen>;
}

const mapStateToProps = (state) => {
  return { post: state.post };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectPost: (post) => {
      dispatch(action.selectPost(post));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPostScreenContainer);
