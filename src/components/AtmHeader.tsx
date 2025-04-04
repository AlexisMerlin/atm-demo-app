import Image from 'next/image';

export default function AtmHeader() {
  return (
    <div className='relative flex h-fit w-full flex-col items-center rounded-xl border-t-4 border-indigo-800 bg-gradient-to-b from-indigo-500 to-indigo-600 pb-3 shadow-lg drop-shadow-xl'>
      <h1 className='align-text-top text-8xl font-semibold text-white font-stretch-extra-expanded'>
        ATM
      </h1>
      <h2 className='text-2xl font-semibold text-white uppercase'>24 hours banking</h2>
      <div className='absolute bottom-0 left-1/2 h-4 w-5/6 -translate-x-1/2 rounded-b-xl bg-black/30 blur-md'></div>
      <Image
        src='/graffiti.png'
        alt='graffiti-1'
        width={207}
        height={63}
        className='absolute translate-x-15 translate-y-8 opacity-80'
      />
    </div>
  );
}
