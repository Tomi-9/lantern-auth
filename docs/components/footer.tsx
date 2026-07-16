import Link from 'next/link';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
          Copyright © {new Date().getFullYear()} Lantern Auth. 
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
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
    </footer>
  );
}
