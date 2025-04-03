export default function AtmButtonLabel({ text, position }: { text: string; position: string }) {
  return <div className={`${position} truncate px-2`}>{text}</div>;
}
