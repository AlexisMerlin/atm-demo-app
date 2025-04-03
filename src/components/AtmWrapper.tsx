import AtmContainer from './AtmContainer';

export default function AtmWrapper() {
  return (
    <div className='flex max-h-screen w-full flex-col items-center overflow-hidden p-1 pt-5 sm:w-2xl sm:p-10 sm:px-30'>
      <AtmContainer />
    </div>
  );
}
