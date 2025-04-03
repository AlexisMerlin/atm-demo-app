import Image from 'next/image';
import AtmScreenContainer from './ScreenComponents/AtmScreenContainer';

export default function AtmBody() {
  return (
    <div className='mx-5 w-9/10 bg-slate-100 h-svh'>
      <div className='flex w-full justify-center'>
        <Image
          src='/creditcard_sprite.png'
          alt='credit card sprite'
          width={200}
          height={40}
          className='opacity-50'
        />
      </div>
      <AtmScreenContainer />
    </div>
  );
}
