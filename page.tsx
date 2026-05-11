import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pythagorean Group | Capital Formation & Strategic Finance",
  description: "Structured capital, private credit, growth equity, and strategic finance advisory."
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
