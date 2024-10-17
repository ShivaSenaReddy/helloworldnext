"use client";

import { useRouter } from "next/navigation";
import React from "react";

function PlaceOrder() {
  const router = useRouter();
  function handleClick() {
    router.push("/");
  }
  return (
    <div>
      Order
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default PlaceOrder;
