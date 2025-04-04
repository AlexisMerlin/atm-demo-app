'use client';

import { selectButtonById } from '@/store/ui.slice';
import { useSelector } from 'react-redux';

export default function AtmButtonLabel({ id, position }: { id: string; position: string }) {
  const btn = useSelector(selectButtonById(id));

  return (
    <div className={`${position} truncate px-3 align-text-top font-semibold text-white`}>
      {btn?.label}
    </div>
  );
}
