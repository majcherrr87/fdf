import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Container, Typography } from "@mui/material";
import ThemeRegistry from "./lib/ThemeRegistry";
import { Header } from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fabryka Dobrej Formy",
  description: "Fabryka Dobrej Formy - Twoje miejsce na zdrowie i urodę",
  keywords: [
    "Trener",
    "Fitness",
    "Zdrowie",
    "Uroda",
    "Fabryka Dobrej Formy",
    "Trening",
    "Dieta",
    "Sport",
    "EMS",
  ],
  openGraph: {
    title: "Fabryka Dobrej Formy",
    description: "Zdrowie i uroda - Fabryka Dobrej Formy",
    url: "https://fabrykadobrejformy.pl",
    siteName: "FabrykaDobrejFormy",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "/img/fdfLogo.png",
        width: 258,
        height: 78,
        alt: "Fabryka Dobrej Formy - logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta
          name="apple-mobile-web-app-title"
          content="Fabryka Dobrej Formy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8bff1f" />
      </head>
      <body>
        <ThemeRegistry>
          <Header />
          <main>
            <Container maxWidth="lg">{children}</Container>
          </main>
          <footer>
            <Typography textAlign={"center"} bgcolor={"red"} p={2}>
              Footer
            </Typography>
          </footer>
        </ThemeRegistry>
      </body>
    </html>
  );
}
