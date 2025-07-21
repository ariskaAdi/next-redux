import Card from "@/components/layouts/card";
import CartProduct from "../layouts/cart-products";
import Navbar from "../layouts/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-start p-8">
        <Card />
        <CartProduct />
      </div>
    </>
  );
}
