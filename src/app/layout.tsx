import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meu portfolio",
  description: "Este projeto tem como propósito servir como um portfólio profissional, onde posso apresentar minha trajetória, habilidades e experiências por meio de projetos reais. A plataforma foi desenvolvida utilizando tecnologias que melhor se adequam ao meu perfil, destacando minha expertise e preferências no desenvolvimento de software.",
  icons: {
    icon: "/programacao.png", // Caminho do favicon
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
