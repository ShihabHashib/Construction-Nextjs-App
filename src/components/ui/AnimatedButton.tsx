"use client";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
}

export function AnimatedButton({ href, children }: AnimatedButtonProps) {
  return (
    <div className="inline-block">
      <a
        className="
          relative 
          inline-flex items-center
          px-6 py-3
          text-sm font-medium
          overflow-hidden
          border border-orange-400 rounded-full
          transition-all duration-300
          hover:bg-orange-400 hover:text-white
          before:absolute
          before:inset-0
          before:bg-orange-400/10
          before:scale-x-0
          before:origin-right
          before:transition-transform
          before:duration-300
          hover:before:scale-x-100
          hover:before:origin-left
        "
        href={href}
      >
        <span className="relative z-10">{children}</span>
        <svg
          className="w-4 h-4 ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>
  );
}
