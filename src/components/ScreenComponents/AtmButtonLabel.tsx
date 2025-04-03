export default function AtmButtonLabel({ text, position }: { text: string; position: string }) {
  return <div className={`${position} px-2 truncate`}>{text}</div>;
}
