import React from "react";

function Card({
  username = "Ducati",
  post = "Not assigned yet",
  url = "https://www.carandbike.com/_next/image?url=http%3A%2F%2Fi.ndtvimg.com%2Fi%2F2016-03%2F2016-suzuki-hayabusa-ckd_827x519_71457423088.jpg&w=1920&q=75",
}) {
  return (
    <div>
      {/* <img
        src="https://images.unsplash.com/photo-1635073908681-b4dfbd6015e8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym13JTIwczEwMDBycnxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
      />
      <h1 className="text-2xl bg-green-500 p-3 rounded">A card for Photos</h1>
      <p>
        BMW S1000RR is a race oriented sport bike initially made by BMW Motorrad
        to compete in the 2009 Superbike World Championship, that is now in
        commercial production.
      </p> */}

      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={url}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              BMW S1000RR is a race oriented sport bike initially made by BMW
              Motorrad to compete in the 2009 Superbike World Championship, that
              is now in commercial production.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div>{username}</div>
            <div>{post}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
