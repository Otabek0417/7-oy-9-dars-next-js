import React from "react";
import Link from "next/link";

function Contact() {
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam porro eos
        odit nostrum praesentium dignissimos architecto earum? Soluta velit
        expedita magnam pariatur aliquid! Repellendus iure animi accusamus,
        cupiditate quia deleniti expedita, necessitatibus laborum magnam
        suscipit eius velit tempore esse aliquam illum officia laboriosam libero
        veniam. Quasi fugit, unde sint sapiente facilis exercitationem tempora
        ea vel iste itaque id distinctio repudiandae consequuntur molestiae
        sequi reiciendis laudantium ad voluptatibus eos fuga sed quam excepturi
        eaque ullam! Consectetur, laborum odio. Excepturi deserunt culpa nisi
        impedit iusto exercitationem itaque quasi nesciunt aliquam illo dolores
        eius totam amet modi dolorum velit saepe natus, ducimus fugit?
      </p>
      <div className="flex gap-2 mt-10">
        <Link href={"/faq"}>
          <button className="btn btn-outline btn-accent btn-sm">Faq</button>
        </Link>{" "}
        <Link href={"/form"}>
          <button className="btn btn-outline btn-primary btn-sm">Form</button>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
