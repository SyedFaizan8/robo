import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';

export default function Home() {

  return (
    <>
      <a
        href="https://www.syedfaizan.in"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-20 group/btn flex items-center justify-start px-2 space-x-1 bottom-0 mb-5 ml-5 text-white rounded-lg h-8 w-auto font-medium bg-black shadow-[0px_0px_1px_1px_var(--neutral-800)]"
      >
        <div className='space-x-7'>
          <Image
            src="/icon.png"
            width={28}
            height={30}
            alt="logo"
            className="absolute bottom-0"
          />
          <span className="text-white text-sm">Author Page</span>
        </div>
      </a>
      <main className="h-screen w-screen flex items-center justify-center bg-gray-100">
        <Spline
          scene="https://prod.spline.design/FXoLOR4RsNLDMfdD/scene.splinecode"
          className="h-full w-full"
        />
      </main>
    </>
  );
}




