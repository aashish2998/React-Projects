import React, { useState, useEffect } from "react";

import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = React.useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/aashish2998")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center m-4  bg-gray-600 text-white p-4 text-3xl">
      Public Repositories: {data.public_repos}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/aashish2998");

  return response.json();
};
