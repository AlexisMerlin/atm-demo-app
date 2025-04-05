'use client';

import { useATM } from '@/hooks/atmHook';
/**
 *
 * @deprecated This component is deprecated 
 */
export default function InputPin() {
  const { clientInput, handleConfirm, isReadyForInput, setClientInput } = useATM();
  return (
    <div className='relative z-50 flex w-full justify-center gap-1'>
      <input
        disabled={!isReadyForInput}
        className='rounded-10 w-20 bg-slate-100'
        type='text'
        placeholder='PIN'
        value={clientInput}
        onChange={(e) => setClientInput(e.target.value)}
      />
      <button onClick={handleConfirm} disabled={!isReadyForInput}>
        ✔️
      </button>
    </div>
  );
}
