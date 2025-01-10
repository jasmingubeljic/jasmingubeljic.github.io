import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Jasmin Gubeljić",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navigation />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
