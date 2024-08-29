import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anton Glebov - Professional CV | Experience, Skills, and Achievements",
  description: "Anton Glebov's professional CV, showcasing his skills, experience, education, and achievements in the field of software development",
  keywords: "Anton Glebov, CV, resume, software developer, professional experience, education, skills, achievements"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" id="element-to-print" className="dark">
      <head>
        <meta charSet="UTF-8"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Anton Glebov</title>
        <meta name="title" content="Anton Glebov - Professional CV | Experience, Skills, and Achievements"/>
        <meta name="description"
              content="Anton Glebov's professional CV, showcasing his skills, experience, education, and achievements in the field of software development."/>
        <meta name="keywords"
              content="Anton Glebov, CV, resume, software developer, professional experience, education, skills, achievements"/>
      </head>
      <body className={inter.className}>{children}</body>
      </html>
  );
}
