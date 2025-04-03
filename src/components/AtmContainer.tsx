import AtmHeader from './AtmHeader';
import AtmBody from './AtmBody';

export default function AtmContainer() {
  return (
    <div className='flex w-full flex-col items-center border-1 border-amber-500 sm:w-md'>
      <AtmHeader />
      <AtmBody />
    </div>
  );
}
