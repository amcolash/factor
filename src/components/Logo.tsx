import image from '../images/logo.png';

export function Logo({ className }: { className?: string }) {
  return <img src={image} className={'h-52 mb-10 mt-4 ' + className} />;
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
    <div className="w-screen h-[100svh] flex flex-col justify-center items-center" {...props}>
      <h1 className="mt-30 text-center text-5xl font-bold mb-2">Factor</h1>
      <Logo className={className} />
      {children}
    </div>
  );
}
