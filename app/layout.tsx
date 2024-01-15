import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "fallback",
});

export const metadata: Metadata = {
  title: "Jay Shim Portfolio Website",
  description: "This is Jay Shim's Portfolio Website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <>
          <NavBar />
        </>
        <>{children}</>
      </body>
    </html>
  );
}
