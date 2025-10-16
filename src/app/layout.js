import { Geist, Geist_Mono ,Shrikhand } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const srikhand = Shrikhand({
  variable: "--font-srikhand",
  subsets: ['latin'],  
  weight: '400',      
  // display: 'swap', 
});

export const metadata = {
  title: "Sorathiyo Thal | Authentic Gujarati Restaurant in [City Name]",
  description: "Sorathiyo Thal - Enjoy authentic Gujarati cuisine, traditional thali, snacks, and sweets. Best Gujarati restaurant in [City Name].",
  keywords: "Gujarati restaurant, Sorathiyo Thal, Gujarati thali, vegetarian restaurant, Indian cuisine, traditional Gujarati food, best thali in [City Name], Indian snacks, Indian sweets, authentic Gujarati dishes",
  author: "Sorathiyo Thal",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${srikhand.variable} ${geistMono.variable} ${srikhand.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
