import { twMerge } from 'tailwind-merge';

import image from 'images/logo.png';

export function Logo({ className }: { className?: string }) {
  return <img src={image} className={twMerge('h-52', className)} />;
}

export function LogoPage({
  className,
  children,
  ...props
}: {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <div className="flex h-svh w-screen flex-col items-center justify-center gap-5" {...props}>
      <h1 className="m-0 -mb-1 text-center">Factor 2FA</h1>
      <Logo className={className} />
      {children}

      <span
        className={twMerge(
          'absolute right-2 bottom-1.5 text-right leading-tight whitespace-pre',
          process.env.NODE_ENV === 'production' ? 'text-[8px]' : 'text-sm'
        )}
      >
        {new Date(__BUILD_TIME__).toLocaleString().replace(', ', '\n')}
      </span>
    </div>
  );
}
