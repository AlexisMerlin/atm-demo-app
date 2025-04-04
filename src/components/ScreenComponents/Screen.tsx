'use client';

import { selectClient } from '@/store/client.slice';
import { selectMessage } from '@/store/ui.slice';
import { useSelector } from 'react-redux';

export default function Screen({ position }: { position: string }) {
  const screen = useSelector(selectMessage);
  const { currentClient } = useSelector(selectClient);
  return (
    <div
      className={`${position} flex flex-col items-center bg-sky-500 outline-5 outline-slate-500`}
    >
      <div className='flex h-1/2 w-6/7 flex-col items-center justify-between pb-3'>
        <p className='text-center text-lg font-semibold text-white uppercase'>
          {currentClient?.cardType && `${currentClient?.cardType} card`}
        </p>
        <div>
          <p className='text-center text-lg font-semibold text-white'>{screen.primary}</p>
          <p className='text-center text-lg font-semibold text-white'>{screen.secondary}</p>
        </div>
      </div>
    </div>
  );
}
