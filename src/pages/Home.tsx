import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Todo list home");
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>
        W przyszłości powstanie jakaś większa aplikacja, <br />
        ale narazie ta strona jest w budowie :)
      </h1>
    </div>
  );
};

export default Home;
