export default function AtmButton({ location }: { location: string }) {
  return (
    <button
      className={`${location} flex px-2 transition-all duration-150 active:translate-y-[2px]`}
    >
      <div className='h-full w-full rounded-sm border border-gray-400 bg-gradient-to-b from-gray-200 to-gray-500 shadow-md shadow-gray-700 sm:w-3/4' />
    </button>
  );
}
