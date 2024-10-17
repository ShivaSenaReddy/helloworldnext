import Link from "next/link";
import React from "react";

function Home() {
  return (
    <div>
      Home
      <a href="about">About</a>
      <Link href="/blogs">Blogs</Link>
      <Link href="/products">Products</Link>
    </div>
  );
}

export default Home;
