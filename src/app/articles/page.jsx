import ArticlesList from "@/components/ArticlesList";
import React from "react";

const getData = async () => {
  const req = await fetch("http://localhost:3000/api/articles");
  const data = await req.json();
  return data;
};
  
async function Articles() {
  const { articles } = await getData();
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold">Articles</h1>
      <ArticlesList articles={articles} />
    </div>
  );
}

export default Articles;
