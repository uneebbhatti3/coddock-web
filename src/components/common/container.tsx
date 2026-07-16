import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A premium, spacious container for app sections.
 * - Horizontally centers content
 * - Applies calm modern max width
 * - Uses shadcn theme tokens for bg + text
 * - Accepts extra className for flexibility
 */

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`container mx-auto max-w-[1280px] px-5 sm:px-8 md:px-12 lg:px-20 ${className}`}
    >
      {children}
    </div>
  );
}
