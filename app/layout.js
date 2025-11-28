import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Thakku Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="max-w-7xl mx-auto px-8 py-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
