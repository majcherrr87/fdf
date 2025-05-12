import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "./layout.module.scss"; // Import SCSS Module
import ServiceWorkerRegistration from "./components/ServiceWorkerRegistration";
import Link from "next/link";

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
          {" "}
          {/* Użyj stylów z SCSS Module */}
          <header className={styles.header}>
            <div className={styles.container}>
              <div className={styles.logo}>Fabryka Dobrej Formy</div>
              <nav>
                <ul className={styles.nav}>
                  <li>
                    <Link href="/" className={styles.link}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/oferta" className={styles.link}>
                      Oferta
                    </Link>
                  </li>
                  <li>
                    <Link href="/kontakt" className={styles.link}>
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main className={styles.main}>{children}</main>
          <footer className={styles.footer}>
            <div className={styles.footerText}>
              © {new Date().getFullYear()} Fabryka Dobrej Formy. All rights
              reserved.
            </div>
          </footer>
          <ServiceWorkerRegistration />
        </div>
      </body>
    </html>
  );
}
