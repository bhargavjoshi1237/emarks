import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
       <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet" />
      </Head>
      <body className="antialiased bg-[#212121] overflow-hidden">
        {children}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
      </body>
     
    </html>
  );
}
