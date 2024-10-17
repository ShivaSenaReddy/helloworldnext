import { Metadata } from "next";

import React from "react";
// export const metadata = {
//   title: "test1",
// };
type Props = {
  params: { productId: string };
};
export const generateMetaData = ({ params }: Props): Metadata => {
  return { title: `Product ${params.productId} ` };
};
function ProductDetails({ params }: Props) {
  return <div>Details of The Product {params.productId}</div>;
}

export default ProductDetails;
