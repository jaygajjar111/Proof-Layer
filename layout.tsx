import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProofLayer — Real Assets. Real Trust.",
  description: "Verifiable digital records for real-world assets."
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}