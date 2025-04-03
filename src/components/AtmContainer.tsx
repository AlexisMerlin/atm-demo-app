import AtmHeader from './AtmHeader';
import AtmBody from './AtmBody';

export default function AtmContainer() {
  return (
    <div className='flex w-full flex-col items-center sm:w-md'>
      <AtmHeader />
      <AtmBody />
    </div>
  );
}
