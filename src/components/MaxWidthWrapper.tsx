import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
}
function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
  return (
    <div
      className={cn(
        'max-auto w-full max-w-screen-xl px-2. md:px-20',
        className
      )}
    >
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
