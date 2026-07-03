import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center h-dvh gap-6">
      <h1 className="">Lost your way?</h1>

      <div className="flex flex-col gap-0.5">
        <span>⇩</span>
      </div>
      <Link
        className=" duration-150 underline underline-offset-4 hover:opacity-75 active:scale-95"
        href={"/"}
      >
        Return Home
      </Link>
    </div>
  );
}
