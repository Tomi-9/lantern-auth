'use client';

import Link from 'next/link';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';

export function Navbar() {
  return (
    <nav className="w-full border-b border-border bg-primary/5 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold text-foreground hover:text-accent transition-colors"
          >
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            </div>
            <span>Lantern Auth.</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-muted-foreground hover:text-lime-500 transition-colors text-sm font-medium"
            >
              Features
            </Link>
            <Link
              href="#docs"
              className="text-muted-foreground hover:text-lime-500 transition-colors text-sm font-medium"
            >
              Documentation
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/Tomi-9/lantern-auth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              href="https://x.com/lantern_auth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="w-5 h-5" />
            </Link>
            {/*
            <Link
              href="/auth"
              className="px-4 py-2 bg-accent text-primary rounded-lg hover:bg-accent/90 transition-all font-medium text-sm"
            >
              Sign In
            </Link>
            */}
          </div>
        </div>
      </div>
    </nav>
  );
}