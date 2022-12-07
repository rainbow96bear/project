import { connect } from "react-redux";

import NewPost from "./NewPost";
import { action } from "../../modules/post";

function NewPostContainer({ post, upload }) {
  return <NewPost post={post} upload={upload}></NewPost>;
}

const mapStateToProps = (state, props) => {
  return { post: state.post, ...props };
};

const mapDispatchToProps = (dispatch) => {
  return {
    upload: (newPost) => {
      dispatch(action.upload(newPost));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPostContainer);
