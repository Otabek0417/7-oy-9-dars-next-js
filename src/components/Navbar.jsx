import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <div className="w-full mt-5">
      <div className="navbar bg-base-100 flex container justify-between ">
        <Link href={"/"} className="btn text-3xl hover:text-orange-500">
          Articles
        </Link>
        <nav className=" flex items-center gap-1">
          <Link
            className="btn btn-ghost text-base  hover:text-orange-500"
            href="/"
          >
            Home
          </Link>
          <Link
            className="btn btn-ghost text-base hover:text-orange-500"
            href="/about"
          >
            About
          </Link>
          <Link
            className="btn btn-ghost text-base hover:text-orange-500"
            href="/articles"
          >
            Article
          </Link>
          <Link
            className="btn btn-ghost text-base hover:text-orange-500"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
