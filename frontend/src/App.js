import React, { useState } from "react";
import Header from "./components/Header/Header";
// import "./App.css";
import EditPage from "./components/Edit/EditPage";
import { useSelector } from "react-redux";

const App = () => {
  const [isEdit, setIsEdit] = useState(false);
  const demo = useSelector((state) => state);
  console.log("demo:", demo);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  return (
    <div className="App">
      {isEdit ? (
        <EditPage setIsEdit={setIsEdit} />
      ) : (
        <Header setIsEdit={setIsEdit} />
      )}
      {pending && <p className="loading">loading</p>}
      {!isEdit && error && <p className="error">this is error</p>}
    </div>
  );
};

export default App;
