import "./globals.css";

export const metadata = {
  title: "Hiring Handoff — A hiring system built with you",
  description:
    "A working hiring system, installed once, run forever. Built by a recruiter who has run 500+ searches and knows exactly what breaks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
