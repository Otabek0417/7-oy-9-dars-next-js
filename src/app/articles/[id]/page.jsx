"use client";

// import React from "react";
// const getData = async (id) => {
//   const req = await fetch(`http://localhost:3000/api/articles/${id}`);
//   const data = await req.json();
//   return data;
// };

// async function Article({ params }) {
//   const data =getData(params.id);
//   console.log(data);
//   return <div>{params.id}</div>;
// }

// export default Article;

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import data from "../../api/articles/data";
import Image from "next/image";
import Link from "next/link";
const Article = () => {
  const [item, setItem] = useState();
  const { id } = useParams();

  useEffect(() => {
    setItem(data.find((item) => item.id === id));
  }, [id]);
  
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold mb-4">About article</h1>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Image
            className="mt-2 "
            alt="img"
            width={0}
            height={0}
            sizes="100vw"
            src={item?.image}
            style={{ width: "500px", height: "400px" }}
          />
        </figure>
        <div className="card-body w-40">
          <h1 className="card-title text-3xl">Title: {item?.title}</h1>
          <h2 className="text-lg font-bold">
            Author: <i>{item?.author}</i>
          </h2>
          <p className="">{item?.body}</p>
          <div className="card-actions justify-end">
            <Link href={"/articles"}>
              <button className="btn btn-primary">Return Articles </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
