import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Sidebar from "@/components/SideBar";

export const metadata: Metadata = {
  title: "voorbeeld react app",
  description: "Administratie tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      {/* We maken de algehele achtergrond een tikkeltje donkerder grijs (bg-slate-100) zodat de witte kaarten er echt uitspringen */}
      <body className="h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-r from-[rgb(235,248,254)] to-[rgb(164,223,248)] bg-slate-100 p-3 gap-3 antialiased text-slate-800">
        
        {/* 1. NAVBAR (Bovenkant) - Nu een losse zwevende kaart met ronde hoeken */}
        <Navbar />
        {/*<header className="h-16 w-full bg-white rounded-xl flex items-center px-6 shrink-0 shadow-sm">
          <div className="font-bold text-sky-600 text-xl">Navbar</div>
        </header>*/}

        {/* Onderkant: Flexbox container met een gap (tussenruimte) van 12px (gap-3) */}
        <div className="flex flex-1 w-full gap-3 overflow-hidden">
          
          {/* LINKERKOLOM (Bevat het menu en het vakje met de knop) */}
          {/* We geven de kolom zelf GEEN witte achtergrond, maar maken de componenten erin wit! */}
          <aside className="w-64 h-full flex flex-col gap-3 shrink-0">

            <Sidebar />

          </aside>

          {/* 4. MAIN WINDOW (Rechts) - Ook een prachtige losse witte kaart */}
          <main className="flex-1 h-full bg-white rounded-xl overflow-y-auto p-8 shadow-sm">
            {children}
          </main>

        </div>

      </body>
    </html>
  );
}