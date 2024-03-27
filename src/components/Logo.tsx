import image from '../logo.png';

export function Logo({ className }: { className?: string }) {
  return <img src={image} className={'h-52 mb-10 ' + className} style={{ clipPath: 'circle(40%)' }} />;
}

export function LogoPage({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className="w-screen h-[100svh] flex flex-col justify-center items-center">
      <h1 className="mt-30 text-center text-5xl font-bold mb-2">Factor</h1>
      <img src={image} className={'h-52 mb-10 ' + className} style={{ clipPath: 'circle(40%)' }} />
      {children}
    </div>
  );
}
