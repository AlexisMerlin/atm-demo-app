import Image from 'next/image';
import AtmScreenContainer from './ScreenComponents/AtmScreenContainer';
import InputPin from './InputPin';

export default function AtmBody() {
  return (
    <div className='mx-5 h-svh w-9/10 bg-gradient-to-b from-slate-200 to-slate-500 pt-3 shadow-lg drop-shadow-xl'>
      <div className='flex w-full justify-center'>
        <div className='relative h-[40px] w-[25px] overflow-hidden'>
          <Image
            src='/creditcard_sprite.png'
            alt='credit card sprite A'
            width={200}
            height={40}
            className='h-auto w-auto max-w-[1000%] object-cover object-left'
          />
        </div>
        <div className='relative h-[40px] w-[180px] overflow-hidden'>
          <Image
            src='/creditcard_sprite.png'
            alt='credit card sprite'
            width={200}
            height={40}
            className='h-auto w-auto translate-x-[-25px] object-cover object-left opacity-30'
          />
        </div>
      </div>
      <AtmScreenContainer />
      <InputPin />
    </div>
  );
}
