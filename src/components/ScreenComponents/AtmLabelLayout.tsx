import AtmButtonLabel from './AtmButtonLabel';

export default function AtmLabelLayout() {
  return (
    <>
      <AtmButtonLabel
        text='action 1'
        position='col-start-2 col-end-3 row-start-6 row-end-7 justify-self-start'
      />
      <AtmButtonLabel
        text='action 2'
        position='col-start-4 col-end-5 row-start-6 row-end-7 justify-self-end'
      />
      <AtmButtonLabel
        text='action 3'
        position='col-start-2 col-end-3 row-start-7 row-end-8 justify-self-start'
      />
      <AtmButtonLabel
        text='action 4'
        position='col-start-4 col-end-5 row-start-7 row-end-8 justify-self-end'
      />
      <AtmButtonLabel
        text='action 5'
        position='col-start-2 col-end-3 row-start-8 row-end-9 justify-self-start'
      />
      <AtmButtonLabel
        text='action 6'
        position='col-start-4 col-end-5 row-start-8 row-end-9 justify-self-end'
      />
      <AtmButtonLabel
        text='action 7'
        position='col-start-2 col-end-3 row-start-9 row-end-10 justify-self-start'
      />
      <AtmButtonLabel
        text='action 8'
        position='col-start-4 col-end-5 row-start-9 row-end-10 justify-self-end'
      />
    </>
  );
}
