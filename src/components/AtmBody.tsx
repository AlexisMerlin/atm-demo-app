import Image from 'next/image';
import AtmScreenContainer from './ScreenComponents/AtmScreenContainer';
import NumPad from './NumPad';

export default function AtmBody() {
  return (
    <div className='mx-5 h-svh w-9/10 bg-gradient-to-b from-slate-200 to-slate-500 pt-1 shadow-lg drop-shadow-xl sm:pt-3'>
      <div className='flex w-full justify-center'>
        <div className='relative h-[40px] w-[25px] overflow-hidden'>
          <Image
            src='/creditcard_sprite.png'
            alt='credit card sprite A'
            width={237}
            height={42}
            className='max-w-[1000%] object-cover object-left'
          />
        </div>
        <div className='relative h-[40px] w-[180px] overflow-hidden'>
          <Image
            src='/creditcard_sprite.png'
            alt='credit card sprite'
            width={237}
            height={42}
            className='translate-x-[-25px] object-cover object-left opacity-30'
          />
        </div>
      </div>
      <AtmScreenContainer />

      <NumPad />
    </div>
  );
}
