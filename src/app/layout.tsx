import localFont from "next/font/local";
import "./global.css";

import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";

const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body>
        {children}
        <h1 className="text-6xl font-bold">Hello, World</h1>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
