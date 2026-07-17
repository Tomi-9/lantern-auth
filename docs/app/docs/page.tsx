'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useState } from 'react';
import { BookOpen, BookMarked, Database, Plug } from 'lucide-react';

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = {
    'getting-started': {
      title: 'Get Started',
      icon: BookOpen,
      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Getting Started</h2>
            <p className="text-muted-foreground mb-4">
              Welcome to Lantern Auth. This guide will help you set up authentication in your TypeScript project.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Installation</h3>
            <pre className="bg-background border border-border rounded-lg p-4 text-sm text-foreground overflow-x-auto">
              <code>npm install lantern-auth</code>
            </pre>
          </div>
        </div>
      )
    },
    'guides': {
      title: 'Guides',
      icon: BookMarked,
      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Guides</h2>
            <p className="text-muted-foreground">
              In production
            </p>
          </div>
        </div>
      )
    },
    'database': {
      title: 'Database',
      icon: Database,
      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Database</h2>
            <p className="text-muted-foreground">
              In production
            </p>
          </div>
        </div>
      )
    },
    'plugins': {
      title: 'Plugins',
      icon: Plug,
      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Plugins</h2>
            <p className="text-muted-foreground">
              In production
            </p>
          </div>
        </div>
      )
    }
  };

  const currentSection = sections[activeSection as keyof typeof sections];

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
                {currentSection?.content}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
