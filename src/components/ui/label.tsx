'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import AsteriskIcon from '../../../public/icons/asterisk.svg';

const labelVariants = cva(
  'text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

const InputLabel = ({
  children,
  className,
  required,
  ...props
}: React.ComponentPropsWithoutRef<typeof Label> &
  Readonly<{
    required?: boolean;
  }>) => {
  return (
    <Label className={cn('text-base font-bold mb-2', className)} {...props}>
      {required ? (
        <>
          <span className="inline-block me-[3px]">{children}</span>
          <span className="inline-block align-top">
            <AsteriskIcon />
          </span>
        </>
      ) : (
        children
      )}
    </Label>
  );
};

export { Label, InputLabel };
