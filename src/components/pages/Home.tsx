import Card from "@/components/layouts/card";
import CartProduct from "../layouts/cart-products";

export default function Home() {
  return (
    <div className="flex justify-start p-8">
      <Card />
      <CartProduct />
    </div>
  );
}
