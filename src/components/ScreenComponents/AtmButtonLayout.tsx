import AtmButton from "./AtmButton";

export default function AtmButtonLayout() {
  return (
    <>
      <AtmButton location='col-start-1 col-end-2 row-start-6 row-end-7 justify-end' />
      <AtmButton location='col-start-5 col-end-6 row-start-6 row-end-7' />
      <AtmButton location='col-start-1 col-end-2 row-start-7 row-end-8 justify-end' />
      <AtmButton location='col-start-5 col-end-6 row-start-7 row-end-8' />
      <AtmButton location='col-start-1 col-end-2 row-start-8 row-end-9 justify-end' />
      <AtmButton location='col-start-5 col-end-6 row-start-8 row-end-9 ' />
      <AtmButton location='col-start-1 col-end-2 row-start-9 row-end-10 justify-end' />
      <AtmButton location='col-start-5 col-end-6 row-start-9 row-end-10' />
    </>
  );
}
