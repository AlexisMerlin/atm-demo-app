import AtmButton from './AtmButton';

export default function AtmButtonLayout() {
  return (
    <>
      <AtmButton id='btn-1' location='col-start-1 col-end-2 row-start-6 row-end-7 justify-end' />
      <AtmButton id='btn-2' location='col-start-5 col-end-6 row-start-6 row-end-7' />
      <AtmButton id='btn-3' location='col-start-1 col-end-2 row-start-7 row-end-8 justify-end' />
      <AtmButton id='btn-4' location='col-start-5 col-end-6 row-start-7 row-end-8' />
      <AtmButton id='btn-5' location='col-start-1 col-end-2 row-start-8 row-end-9 justify-end' />
      <AtmButton id='btn-6' location='col-start-5 col-end-6 row-start-8 row-end-9 ' />
      <AtmButton id='btn-7' location='col-start-1 col-end-2 row-start-9 row-end-10 justify-end' />
      <AtmButton id='btn-8' location='col-start-5 col-end-6 row-start-9 row-end-10' />
    </>
  );
}
