'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function ChangelogPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background text-foreground">
      <Navbar />
      <main className="flex-grow w-full border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-foreground mb-2">Changelog</h1>
            <p className="text-muted-foreground">
              Track all updates and improvements to Lantern Auth
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
