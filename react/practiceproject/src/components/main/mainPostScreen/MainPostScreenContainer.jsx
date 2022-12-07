import { connect, useDispatch, useSelector } from "react-redux";

import { action } from "../../modules/nowPost";
import MainPostScreen from "./MainPostScreen";

export default function MainPostScreenContainer() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  function selectPost(post) {
    dispatch(action.selectPost(post));
  }
  return <MainPostScreen post={post} selectPost={selectPost}></MainPostScreen>;
}
