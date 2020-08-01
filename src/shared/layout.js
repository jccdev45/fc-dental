import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 flex-grow w-full h-full overflow-y-auto">
        {children}
      </main>

      <Footer />
    </div>
  );
}
