'use client';

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl flex flex-col justify-center gap-4 sm:flex-row sm:items-start sm:gap-12">
      <Image
        className="dark:invert size-50"
        src="/favicon/favicon.png"
        alt="lantern-auth logo"
        width={100}
        height={20}
        priority
      />
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <h1 className="max-w-xs text-6xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Lantern Auth
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 font-semibold dark:text-zinc-300">
          A Minimalist Authentication library for TypeScript.
        </p>
      </div>
      </div>
    </section>
  );
}
