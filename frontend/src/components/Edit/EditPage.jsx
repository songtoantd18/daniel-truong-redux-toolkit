import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSuccess } from "../../redux/userSlice";
import { updateUser } from "../../redux/apiRequests";
import "../../styles/edit.css";
import Input from "../Input/Input";

const EditPage = (props) => {
  const { setIsEdit } = props;
  const avarUrl = [
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1188.jpg",
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1188.jpg",
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/312.jpg",
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/312.jpg",
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/897.jpg",
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/224.jpg",
  ];
  const user = useSelector((state) => {
    return state.user;
  });
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState("#00ff00");
  const [url, setUrl] = useState(user.avaUrl);
  const handleSubmit = (e) => {
    e.preventDefault(e);
    setIsEdit(false);
    const updatedUser = {
      name: name,
      age: age,
      about: about,
      avaUrl: url,
      themeColor: theme,
    };
    updateUser(updatedUser, dispatch);
  };

  return (
    <>
      <form>
        <section className="edit-container">
          <button onClick={handleSubmit} className="close">
            {" "}
            save
          </button>
          <div className="edit-profile"> edit profile</div>
          <div className="input-container">
            <Input label="display name" data={user.name} setData={setName} />
            <Input label="age" data={user.age} setData={setAge} />
            <Input
              inputType="textarea"
              classStyle="input-about"
              label="about"
              data={user.about}
              setData={setAbout}
            />

            <label>profile picture</label>
          </div>
          <div className="input-image-container">
            {avarUrl.map((item) => {
              return (
                <>
                  <img
                    key={item}
                    src={item}
                    className="input-image"
                    alt="false"
                    onClick={(e) => setUrl(e.target.src)}
                  />
                </>
              );
            })}
            <div className="theme-container">
              <label>theme</label>
              <input
                type="color"
                className="theme-color"
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default EditPage;
