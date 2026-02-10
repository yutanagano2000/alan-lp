import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const loaderVariants = cva('flex items-center justify-center', {
  variants: {
    size: {
      sm: 'space-x-0.5',
      default: 'space-x-1',
      lg: 'space-x-1.5',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const squareVariants = cva('bg-current rounded-[1px] animate-loader-pulse', {
  variants: {
    size: {
      sm: 'size-1',
      default: 'size-1.5',
      lg: 'size-2',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export interface LoaderProps extends VariantProps<typeof loaderVariants> {
  className?: string;
}

function Loader({ size, className }: LoaderProps) {
  return (
    <div className={cn(loaderVariants({ size }), className)}>
      {[0, 1, 2].map(index => (
        <div
          key={index}
          className={cn(squareVariants({ size }))}
          style={{ animationDelay: `${index * 0.2}s` }}
        />
      ))}
    </div>
  );
}

export { Loader, loaderVariants };
