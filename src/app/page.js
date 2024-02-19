// import Image from "next/image";
import * as React from 'react';
import DrawerAppBar from  "/src/components/AppBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <DrawerAppBar/>
      </header>

    </main>
  );
}
