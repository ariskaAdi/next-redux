import Card from "@/components/layouts/card";
import Navbar from "../layouts/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center p-8">
        <Card />
      </div>
    </>
  );
}
