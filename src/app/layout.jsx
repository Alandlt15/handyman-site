import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
import "./globals.css";

import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={'{inter.className} bg-sky-50'}>
      <body className="min-h-screen bg-sky-50">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
