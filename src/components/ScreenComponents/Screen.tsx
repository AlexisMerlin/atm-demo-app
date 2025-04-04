'use client';

import { selectMessage } from '@/store/ui.slice';
import { useSelector } from 'react-redux';

export default function Screen({ position }: { position: string }) {
  const message = useSelector(selectMessage);
  return (
    <div
      className={`${position} flex flex-col items-center border-5 border-s-slate-500 border-e-slate-400 border-t-slate-500 border-b-slate-400 bg-sky-500`}
    >
      <div className='flex h-1/2 w-6/7 flex-col items-center justify-end pb-3'>
        <p className='text-center text-lg font-semibold text-white'>{message}</p>
      </div>
    </div>
  );
}
