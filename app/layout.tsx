// app/layout.tsx
import "./globals.css";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import CursorTrailCanvas from "./utils/cursor-tail";
import ClientSideWrapper from "./components/ClientSideWrapper";

export const metadata = {
  title: "Gurman",
  description: "Gurman's Portfolio",
};
export type NavbarRoute = {
  title: string;
  href: string;
};

type NavbarRoutes = NavbarRoute[];

export const routes: NavbarRoutes = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Cursor trail component */}
        <div className="-z-10 relative">
          <CursorTrailCanvas id="particles" />
        </div>

        {/* Navbar */}
        <Navbar routes={routes} />

        {/* Client-side wrapper for animations */}
        <ClientSideWrapper>{children}</ClientSideWrapper>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
