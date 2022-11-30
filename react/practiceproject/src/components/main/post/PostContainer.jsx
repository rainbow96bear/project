import { useEffect } from "react";
import { connect } from "react-redux";
import { action } from "../../modules/nowPost";

import PostComponent from "./PostComponent";

function PostContainer({ nowPost }) {
  return <PostComponent nowPost={nowPost}></PostComponent>;
}
const mapStateToProps = (state) => {
  return { nowPost: state.nowPost };
};

export default connect(mapStateToProps)(PostContainer);
