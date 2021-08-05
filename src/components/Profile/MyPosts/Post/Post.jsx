import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://e7.pngegg.com/pngimages/9/692/png-clipart-social-media-computer-icons-avatar-user-internet-social-media-computer-network-logo.png" />
      {props.message}
      <div>
        <span>likes</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
