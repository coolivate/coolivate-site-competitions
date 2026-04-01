import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export function Logo({ className, light = false }: LogoProps) {
  return (
    <span className={cn(
      "font-display font-bold tracking-tight flex items-center select-none",
      light ? "text-white" : "text-navy",
      className
    )}>
      Coolivate
    </span>
  );
}