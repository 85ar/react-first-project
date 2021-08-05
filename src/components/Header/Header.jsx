import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg"
        alt=""
      />
    </header>
  );
};

export default Header;
