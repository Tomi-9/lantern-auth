'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useState } from 'react';
import { BookOpen, Zap } from 'lucide-react';

export default function ChangelogPage() {
  const [activeSection, setActiveSection] = useState('changelog');

  const sections = {
    'changelog': {
      title: 'Changelog',
      icon: BookOpen,
    },
    'adapters': {
      title: 'Adapters & Guides',
      icon: Zap,
    }
  };

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
      <main className="flex-grow w-full border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            {/* Left Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-border/30 pr-8">
              <nav className="space-y-1 sticky top-24">
                {Object.entries(sections).map(([key, value]) => {
                  const Icon = value.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveSection(key)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors flex items-center gap-3 ${
                        activeSection === key
                          ? 'bg-foreground text-background font-semibold'
                          : 'text-muted-foreground hover:text-foreground hover:bg-border/20'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {value.title}
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <div className="max-w-3xl">
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
