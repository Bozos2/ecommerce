import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Oswald } from "next/font/google";

import AuthProvider from "./context/AuthProvider";
import CartProvider from "./context/cart-reducer";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${oswald.variable}`}>
        <CartProvider>
          <AuthProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </AuthProvider>
        </CartProvider>
      </body>
    </html>
  );
}
