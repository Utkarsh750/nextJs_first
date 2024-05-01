export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <>Details of the Product - {params.productId}</>;
}
