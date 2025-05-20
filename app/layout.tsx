import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Container, Typography } from "@mui/material";
import styles from "./layout.module.scss";
import ThemeRegistry from "./lib/ThemeRegistry";

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
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <meta
          name="apple-mobile-web-app-title"
          content="Fabryka Dobrej Formy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8bff1f" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistry>
          <div className={styles.root}>
            <header className={styles.header}></header>
            <main>
              <Container maxWidth="lg">{children}</Container>
            </main>
            <footer>
              <Typography textAlign={"center"} bgcolor={"red"} p={2}>
                Footer
              </Typography>
            </footer>
            {/* <Footer /> */}
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}
