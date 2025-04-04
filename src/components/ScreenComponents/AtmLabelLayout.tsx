import AtmButtonLabel from './AtmButtonLabel';

export default function AtmLabelLayout() {
  return (
    <>
      <AtmButtonLabel
        id='btn-1'
        position='col-start-2 col-end-3 row-start-6 row-end-7 justify-self-start'
      />
      <AtmButtonLabel
        id='btn-2'
        position='col-start-4 col-end-5 row-start-6 row-end-7 justify-self-end'
      />
      <AtmButtonLabel
        id='btn-3'
        position='col-start-2 col-end-3 row-start-7 row-end-8 justify-self-start'
      />
      <AtmButtonLabel
        id='btn-4'
        position='col-start-4 col-end-5 row-start-7 row-end-8 justify-self-end'
      />
      <AtmButtonLabel
        id='btn-5'
        position='col-start-2 col-end-3 row-start-8 row-end-9 justify-self-start'
      />
      <AtmButtonLabel
        id='btn-6'
        position='col-start-4 col-end-5 row-start-8 row-end-9 justify-self-end'
      />
      <AtmButtonLabel
        id='btn-7'
        position='col-start-2 col-end-3 row-start-9 row-end-10 justify-self-start'
      />
      <AtmButtonLabel
        id='btn-8'
        position='col-start-4 col-end-5 row-start-9 row-end-10 justify-self-end'
      />
    </>
  );
}
