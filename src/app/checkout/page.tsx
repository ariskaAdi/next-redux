import PaymentPages from "@/components/pages/Payment-Pages";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Checkout",
};

const Checkout = () => {
  return <PaymentPages />;
};

export default Checkout;
