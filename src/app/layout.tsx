import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Container } from "@/components/layout/container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shadow of the Colossus Exhibit",
  description:
    "Discover Shadow of the Colossus, a legendary video game. Explore a haunting world as Wander battles towering Colossi in a breathtaking, minimalist adventure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className}  antialiased`}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
