import React from "react";
import { useSelector } from "react-redux";

const Header = (props) => {
  const { setIsEdit } = props;
  const user = useSelector((state) => {
    console.log("state:", state);
    return state.user;
  });
  console.log("user:", user);

  const handleEdit = () => {
    setIsEdit(true);
  };
  return (
    <>
      <header
        style={{
          backgroundColor: `${user.themeColor}`,
          backgroundImage: `linear-gradient(150deg,${user.themeColor} 2%,${user.themeColor},65%,#181818 100%`,
        }}
      >
        <div className="infor-container">
          <div className="info-edit" onClick={handleEdit}>
            edit
          </div>
          <img className="infor-ava" src={user.avaUrl} alt="loi" />
          <div className="infor-username">{user.name}</div>
          <div className="infor-age"> {user.age}</div>
          <div className="infor-about"> {user.about}</div>
        </div>
      </header>
    </>
  );
};

export default Header;
