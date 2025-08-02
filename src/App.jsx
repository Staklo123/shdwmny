
// Shadow Money Website - React + Tailwind
import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { Mail, Bitcoin, Info, Truck, ShieldCheck } from "lucide-react";

const products = [
  {
    id: 1,
    label: "100€ - 30 bills",
    price: "120€",
  },
  {
    id: 2,
    label: "50€ - 60 bills",
    price: "120€",
  },
  {
    id: 3,
    label: "20€ - 150 bills",
    price: "120€",
  },
];

const faqs = [
  {
    question: "What are these bills for?",
    answer: "These are decorative replica banknotes used for celebrations, photoshoots, music videos, etc. They are not legal tender."
  },
  {
    question: "Do you accept crypto payments?",
    answer: "Yes, we accept Bitcoin, Ethereum, and USDT."
  },
  {
    question: "Where do you ship?",
    answer: "We ship worldwide with tracking. Shipping cost is calculated at checkout."
  },
  {
    question: "Are returns accepted?",
    answer: "Due to the nature of the product, all sales are final. Please contact us if there is a problem."
  }
];

export default function ShadowMoney() {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">💸 Shadow Money</h1>
        <p className="text-gray-400">Celebration Banknotes - Pay with Crypto</p>
      </header>

      <Tabs defaultValue="shop" className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-4 gap-2">
          <TabsTrigger value="shop">Shop</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
          <TabsTrigger value="policy">Policy</TabsTrigger>
        </TabsList>

        <TabsContent value="shop" className="grid gap-4 mt-6">
          <div className="grid md:grid-cols-3 gap-4">
            {products.map((item) => (
              <Card key={item.id} className="bg-gray-900 border-gray-700">
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{item.label}</h2>
                  <p className="text-lg mb-4">Price: {item.price}</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Pay with Crypto <Bitcoin className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="faq" className="mt-6 space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="shipping" className="mt-6">
          <div>
            <Truck className="w-6 h-6 mb-2" />
            <p>We ship worldwide using tracked shipping. Orders are dispatched within 48 hours. Estimated delivery times range from 5–15 business days depending on destination.</p>
          </div>
        </TabsContent>

        <TabsContent value="policy" className="mt-6">
          <div>
            <ShieldCheck className="w-6 h-6 mb-2" />
            <p>All sales are final. Products are decorative and not legal tender. Contact us for issues at <a href="mailto:shadowmoney@gmail.com" className="underline">shadowmoney@gmail.com</a>.</p>
          </div>
        </TabsContent>
      </Tabs>

      <footer className="mt-20 text-center text-gray-600">
        <p>&copy; 2025 Shadow Money • All rights reserved</p>
        <p className="flex items-center justify-center gap-1 mt-1">
          <Mail className="w-4 h-4" /> shadowmoney@gmail.com
        </p>
      </footer>
    </div>
  );
}
