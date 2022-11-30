import { connect, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { action } from "../../modules/nowPost";

export default function MainPostScreen({ post }) {
  console.log(post);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <MainPostScreenBox>
      {post.map((item, index) => (
        <Link
          key={`mainPost-${index}`}
          className="postBox"
          to={item.title}
          onClick={() => {
            dispatch(action.selectPost(post[index]));
          }}>
          <span>{item.title}</span>
          <div className="contentStyle">{item.content}</div>
        </Link>
      ))}
    </MainPostScreenBox>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     selectPost: (nowPost) => {
//       dispatch(action.selectPost(nowPost));
//     },
//   };
// };

// export default connect(mapDispatchToProps)(MainPostScreen);

const MainPostScreenBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;

  & .postBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
  span {
    display: flex;
    justify-content: flex-start;
    font-size: x-large;
    font-weight: bolder;
  }
  & .contentStyle {
    display: flex;
    justify-content: flex-start;
    color: gray;
  }
`;
