'use client';

import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
   <div className="flex flex-col min-h-screen w-full bg-background text-foreground">
      <Navbar />
      <main className="flex-grow w-full">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
