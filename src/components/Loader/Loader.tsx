import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

const Loader = () => {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setDone(true);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!done ? (
        <ReactLoading
          type={"bars"}
          color={"#03fc4e"}
          height={100}
          width={100}
        />
      ) : (
        <ul></ul>
      )}
    </>
  );
};

export default Loader;
