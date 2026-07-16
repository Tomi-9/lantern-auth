'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function ChangelogPage() {
  const releases = [
    {
      version: '1.0.0',
      date: 'July 16, 2024',
      changes: [
        'Initial release of Lantern Auth',
        'Support for email/password authentication',
        'JWT token management',
        'Session handling',
        'Express adapter included'
      ]
    },
    {
      version: '0.9.0',
      date: 'July 1, 2024',
      changes: [
        'Beta release',
        'Core authentication flows',
        'TypeScript support',
        'Basic adapter system'
      ]
    },
    {
      version: '0.8.0',
      date: 'June 15, 2024',
      changes: [
        'Alpha release',
        'Foundation of authentication library',
        'Initial TypeScript implementation'
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-background text-foreground">
      <Navbar />
      <main className="flex-grow w-full">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Changelog</h1>
            <p className="text-muted-foreground">
              Track all updates and improvements to Lantern Auth
            </p>
          </div>

          <div className="space-y-8">
            {releases.map((release, index) => (
              <div key={index} className="border-l-2 border-border pl-6 pb-8">
                <div className="flex items-baseline gap-4 mb-3">
                  <h2 className="text-2xl font-bold text-foreground">v{release.version}</h2>
                  <time className="text-sm text-muted-foreground">{release.date}</time>
                </div>
                
                <ul className="space-y-2">
                  {release.changes.map((change, changeIndex) => (
                    <li key={changeIndex} className="flex gap-3 text-muted-foreground">
                      <span className="text-foreground/50 flex-shrink-0">•</span>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
