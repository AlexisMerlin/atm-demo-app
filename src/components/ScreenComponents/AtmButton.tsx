export default function AtmButton({ position }: { position: string }) {
  return (
    <button
      className={`${position} flex justify-center transition-all duration-150 active:translate-y-[2px]`}
    >
      <div className='h-full w-1/2 rounded-sm border border-gray-400 bg-gradient-to-b from-gray-200 to-gray-500 shadow-md shadow-gray-700' />
    </button>
  );
}
