import { Bebas_Neue, Jersey_10 } from "next/font/google";
import "./globals.css";

const display = Jersey_10({ subsets: ["latin"], weight: "400", variable: "--font-ai" });
const condensed = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });

export const metadata = {
  title: "adsvitorcosta | IA aplicada",
  description: "IA aplicada ao e-commerce e dropshipping, explicada por quem testa no campo de batalha.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${condensed.variable}`}>{children}</body>
    </html>
  );
}
