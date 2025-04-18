import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Qoo Studio - Powerfull Visualazation",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
