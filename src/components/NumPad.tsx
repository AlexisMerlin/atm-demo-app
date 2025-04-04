'use client';
import { useATM } from '@/hooks/atmHook';
import { useEffect } from 'react';

const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
export default function NumPad() {
  const { clientInput, setClientInput, handleConfirm, handleClearInput, isReadyForInput } =
    useATM();

  const handleClick = (num: number) => {
    setClientInput(clientInput + num.toString());
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (keys.includes(Number(event.key)) && isReadyForInput) {
        setClientInput(clientInput + event.key);
      } else if (event.key === 'Backspace' && isReadyForInput) {
        setClientInput('');
      } else if (event.key === 'Enter' && isReadyForInput) {
        handleConfirm();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [clientInput, setClientInput, handleConfirm, isReadyForInput]);

  return (
    <div className='flex w-full items-center justify-end px-15'>
      <div className='grid w-30 grid-cols-3 place-items-center gap-y-1 bg-slate-500 px-1 py-2 outline-2 outline-slate-300 sm:w-35'>
        {keys.map((num) => (
          <button
            key={num}
            className='h-full w-3/4 rounded-sm border border-gray-400 bg-gradient-to-b from-gray-200 to-gray-500 shadow-md shadow-gray-700 transition-all duration-150 active:translate-y-[2px] sm:w-3/4'
            disabled={!isReadyForInput}
            onClick={() => handleClick(num)}
          >
            {num}
          </button>
        ))}
        <button
          className='h-full w-3/4 rounded-sm border border-gray-400 bg-gradient-to-b from-amber-200 to-amber-500 shadow-md shadow-gray-700 transition-all duration-150 active:translate-y-[2px] sm:w-3/4'
          onClick={handleClearInput}
        />
        <button
          className='h-full w-3/4 rounded-sm border border-gray-400 bg-gradient-to-b from-green-200 to-green-500 shadow-md shadow-gray-700 transition-all duration-150 active:translate-y-[2px] sm:w-3/4'
          onClick={handleConfirm}
        />
      </div>
    </div>
  );
}
