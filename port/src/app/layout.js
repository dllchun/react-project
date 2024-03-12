import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "@/components/shared/footer/Footer";
config.autoAddCss = false; /* eslint-disable import/first */
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Site | Vincent Cheung",
  description:
    "Hi, this is Vincent Cheung, I'm a web developer, project manager and freelance UXUI designer. Feel free to contact me if you need anything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="container">
          <Navbar />

          {children}
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
