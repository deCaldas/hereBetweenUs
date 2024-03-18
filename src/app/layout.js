import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Acá Entre Nos",
  description: "Dos influencers virtuales que te acompañan hacia una masculinidad moderna.",
  metadataBase: new URL('https://decaldas.github.io/hereBetweenUs/'),
  alternates: {
    canonical: '/',
    languages: {
      'es-CO': '/es-CO',
    },
  },
  openGraph: {
    images: './og-image.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
      <Footer />
    </html>
  );
}
