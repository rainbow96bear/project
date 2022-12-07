import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { action } from "../../modules/nowPost";

import PostComponent from "./PostComponent";

export default function PostContainer() {
  const nowPost = useSelector((state) => state.nowPost);
  const { title } = useParams(useLocation());

  return <PostComponent nowPost={nowPost}></PostComponent>;
}
