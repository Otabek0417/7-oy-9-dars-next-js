import React from "react";
import Link from "next/link";
function ArticlesList({ articles }) {
  return (
    <div className="mt-7">
      <ul className="flex flex-col gap-4">
        {articles.map((article) => {
          return (
            <li key={article.id}>
              <h1 className="text-lg font-bold">{article.title}</h1>
              <p className="font-bold mt-2">
                Author:<b className="font-medium ">{article.author}</b>
              </p>
              <Link href={`articles/${article.id}`}>
                <button className="btn btn-outline btn-success btn-sm mt-2">
                  Read more
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArticlesList;
