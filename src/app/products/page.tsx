"use client";
import Link from "next/link";
import React from "react";

function Products() {
  return (
    <div>
      Products List
      <Link href="/">Home</Link>
      <ol>
        <Link href="/products/1">Product1</Link>
        <Link href="/products/2" replace>
          Product2
        </Link>
        <Link href="/products/3">Product3</Link>
      </ol>
    </div>
  );
}

export default Products;
