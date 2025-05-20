import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ServiceWorkerRegistration from "./components/ServiceWorkerRegistration";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import styles from "./layout.module.scss";
import "./reset.css";

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
        <div className={styles.root}>
          <header className={styles.header}>
            <Navbar />
          </header>
          <main className={styles.main}>{children}</main>
          <Footer />
          <ServiceWorkerRegistration />
        </div>
      </body>
    </html>
  );
}
