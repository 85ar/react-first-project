import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg"
          alt=""
        />
      </div>
      <div>ava + descr</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
