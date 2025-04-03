import Image from 'next/image';
import AtmButton from './AtmButton';
import AtmButtonLabel from './AtmButtonLabel';
import Screen from './Screen';

export default function AtmScreenContainer() {
  return (
    <div className='relative'>
      <div className='grid w-full grid-cols-[1fr_2fr_1fr_2fr_1fr] grid-rows-10 gap-y-2'>
        <Screen position='col-start-2 col-end-5 row-start-1 row-end-10' />

        <AtmButton location='col-start-1 col-end-2 row-start-6 row-end-7 justify-end' />
        <AtmButton location='col-start-5 col-end-6 row-start-6 row-end-7' />
        <AtmButton location='col-start-1 col-end-2 row-start-7 row-end-8 justify-end' />
        <AtmButton location='col-start-5 col-end-6 row-start-7 row-end-8' />
        <AtmButton location='col-start-1 col-end-2 row-start-8 row-end-9 justify-end' />
        <AtmButton location='col-start-5 col-end-6 row-start-8 row-end-9 ' />
        <AtmButton location='col-start-1 col-end-2 row-start-9 row-end-10 justify-end' />
        <AtmButton location='col-start-5 col-end-6 row-start-9 row-end-10' />

        <AtmButtonLabel
          text='action 1'
          position='col-start-2 col-end-3 row-start-6 row-end-7 bg-orange-500'
        />
        <AtmButtonLabel
          text='action 2'
          position='col-start-4 col-end-5 row-start-6 row-end-7 bg-lime-500'
        />
        <AtmButtonLabel
          text='action 3'
          position='col-start-2 col-end-3 row-start-7 row-end-8 bg-cyan-500'
        />
        <AtmButtonLabel
          text='action 4'
          position='col-start-4 col-end-5 row-start-7 row-end-8 bg-rose-500'
        />
        <AtmButtonLabel
          text='action 5'
          position='col-start-2 col-end-3 row-start-8 row-end-9 bg-emerald-500'
        />
        <AtmButtonLabel
          text='action 6'
          position='col-start-4 col-end-5 row-start-8 row-end-9 bg-fuchsia-500'
        />
        <AtmButtonLabel
          text='action 7'
          position='col-start-2 col-end-3 row-start-9 row-end-10 bg-sky-500'
        />
        <AtmButtonLabel
          text='action 8'
          position='col-start-4 col-end-5 row-start-9 row-end-10 bg-amber-500'
        />
        <Image
          src='/systems.png'
          alt='Systems logo'
          width={60}
          height={5}
          className='col-start-4 col-end-5 row-start-10 row-end-11 justify-self-end'
        />
      </div>
      <Image
        src='/sticker_graf.png'
        alt='sticker graffiti'
        width={150}
        height={110}
        className='absolute translate-x-7 -translate-y-10 opacity-80'
      />
    </div>
  );
}
