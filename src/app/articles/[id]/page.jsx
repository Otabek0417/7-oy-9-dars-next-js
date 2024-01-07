import React from "react";
const getData = async (id) => {
  const req = await fetch(`http://localhost:3000/api/articles/${id}`);
  const data = await req.json();
  return data;
};

async function Article({ params }) {
  const data = getData(params.id);
  return <div>{params.id}</div>;
}

export default Article;
