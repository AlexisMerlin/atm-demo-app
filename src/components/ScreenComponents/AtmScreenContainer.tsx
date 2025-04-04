import Image from 'next/image';
import Screen from './Screen';
import AtmButtonLayout from './AtmButtonLayout';
import AtmLabelLayout from './AtmLabelLayout';

export default function AtmScreenContainer() {
  return (
    <div className='relative'>
      <div className='grid w-full grid-cols-[1fr_2fr_1fr_2fr_1fr] grid-rows-[0.5fr_0.5fr_0.5fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-x-1 gap-y-2'>
        <Screen position='col-start-2 col-end-5 row-start-1 row-end-10' />
        <AtmButtonLayout />
        <AtmLabelLayout />
        <Image
          src='/systems.png'
          alt='Systems logo'
          width={60}
          height={5}
          className='col-start-4 col-end-5 row-start-10 row-end-11 h-auto w-auto justify-self-end'
        />
      </div>
      <Image
        src='/sticker_graf.png'
        alt='sticker graffiti'
        width={150}
        height={110}
        className='absolute h-auto w-auto translate-x-7 -translate-y-10 opacity-80'
      />
    </div>
  );
}
