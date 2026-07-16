'use client';

import Link from 'next/link';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';

export function Navbar() {
  return (
    <nav className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold text-foreground hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
            </div>
            <span>Lantern Auth.</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/docs"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              DOCS
            </Link>
            <Link
              href="/changelog"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Changelog
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/Tomi-9/lantern-auth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              href="https://x.com/lantern_auth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
