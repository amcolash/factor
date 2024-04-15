import image from '../images/logo.png';

export function Logo({ className }: { className?: string }) {
  return <img src={image} className={'h-52 ' + className} />;
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
    <div className="w-screen h-[100svh] flex flex-col justify-center items-center gap-5" {...props}>
      <h1 className="text-center m-0 -mb-1">Factor</h1>
      <Logo className={className} />
      {children}

      <span className="text-[9px] absolute bottom-1.5 right-1.5 whitespace-pre text-right">
        {new Date(__BUILD_TIME__).toLocaleString().replace(', ', '\n')}
      </span>
    </div>
  );
}
