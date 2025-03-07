import { Playfair_Display } from "next/font/google";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";
import logo from "@/app/icon.png"

const font = Playfair_Display({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair'
});

export const viewport = {

  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "FocusFast | Achieve Deep Focus in minutes, not hours",
  description: "Drop into flow state on demand with FocusFast. No more wasted hours trying to concentrate.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' }
    ],
    apple: { url: '/apple-touch-icon.png', type: 'image/png' }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.className}>
      <head>
        {config.domainName && (
          <PlausibleProvider domain={config.domainName} />
        )}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-neutral-900 text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
