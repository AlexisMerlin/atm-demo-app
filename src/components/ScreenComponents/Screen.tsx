export default function Screen({ position }: { position: string }) {
  return (
    <div
      className={`${position} flex flex-col items-center border-5 border-s-slate-500 border-e-slate-400 border-t-slate-500 border-b-slate-400 bg-sky-500`}
    >
      <div className='flex h-1/2 w-6/7 flex-col items-center justify-end pb-3'>
        <h3 className='text-lg font-semibold text-white'>Hi Peter Parker!</h3>
        <h4 className='text-center text-lg font-semibold text-white'>Please make a choise...</h4>
      </div>
    </div>
  );
}
