import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg"
          alt=""
        />
      </div>
      <div className={s.descriptionBlock}>ava + descr</div>

    </div>
  );
};

export default ProfileInfo;
