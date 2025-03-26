import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smite Leagues – Competitive Smite Tournaments",
  description: "Smite Leagues is the ultimate competitive Smite tournament hub. Join, compete, and track the best players. Stay updated with schedules, stats, and rankings!",
  icons: {
    icon: "/favicon.ico", // Standard favicon
    shortcut: "/favicon.ico",
    apple: "/favicon.png", // Apple devices
  },
  openGraph: {
    title: "Smite Leagues – Competitive Smite Tournaments",
    description: "The premier platform for Smite esports. Track rankings, join tournaments, and compete with the best!",
    url: "https://smiteleagues.com",
    siteName: "Smite Leagues",
    images: [
      {
        url: "/og-image.png", // Add an OG image for social media previews
        width: 1200,
        height: 630,
        alt: "Smite Leagues Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smite Leagues – Competitive Smite Tournaments",
    description: "Compete in high-stakes Smite tournaments and track rankings on Smite Leagues.",
    images: ["/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
