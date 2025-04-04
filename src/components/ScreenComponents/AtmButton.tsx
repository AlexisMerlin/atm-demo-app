'use client';

import { setAtmState } from '@/store/atm.slice';
import { selectButtonById } from '@/store/ui.slice';
import { useDispatch, useSelector } from 'react-redux';

export default function AtmButton({ location, id }: { location: string; id: string }) {
  const btn = useSelector(selectButtonById(id));
  const dispatch = useDispatch();
  function handleClick() {
    if (btn?.action) {
      console.log('Dispatiching action: ', btn.action);
      dispatch(setAtmState(btn.action));
    }
  }
  return (
    <button
      disabled={btn?.disabled ?? true}
      onClick={handleClick}
      className={`${location} flex px-2 transition-all duration-150 active:translate-y-[2px]`}
    >
      <div className='h-full w-full rounded-sm border border-gray-400 bg-gradient-to-b from-gray-200 to-gray-500 shadow-md shadow-gray-700 sm:w-3/4' />
    </button>
  );
}
