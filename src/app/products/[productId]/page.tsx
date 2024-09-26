import React from "react";

function ProductDetails({ params }: { params: { productId: string } }) {
  return <div>Details of The Product {params.productId}</div>;
}

export default ProductDetails;
