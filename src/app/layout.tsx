import type { Metadata } from "next";
import React from 'react';
import { Provider } from 'react-redux';
import store from '@/app/store/store';
import { Inter } from "next/font/google";
// import "./globals.css";
import '@/assets/main.css'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ThemeSwitch from "@/app/components/ThemeSwitch";

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
      <body className={`bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 ${inter.className}`}>
      <Provider store={store}>
          <main className="flex flex-col items-center px-4">
              <Header/>
              {children} {/* This will render the page content */}
              <Footer/>
              <ThemeSwitch/>
          </main>
      </Provider>
      </body>
      </html>
  );
}
