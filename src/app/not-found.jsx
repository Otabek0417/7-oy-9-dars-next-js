import React from "react";

function NotFound() {
  return (
    <div className="w-full max-w-[500px] mx-auto flex flex-col gap-4  mt-52">
      <h1 className="font-bold text-3xl">This page not founded :)</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        voluptatibus dolorem ipsam veritatis minus beatae reiciendis,
        distinctio, hic error ad nesciunt, velit ut voluptatum consequatur
        incidunt excepturi. Iusto, in aliquid?
      </p>
      <button className="btn btn-info w-36 text-neutral-50 text-base">
        Return home
      </button>
    </div>
  );
}

export default NotFound;
