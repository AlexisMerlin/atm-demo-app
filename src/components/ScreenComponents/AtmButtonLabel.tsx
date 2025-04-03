export default function AtmButtonLabel({ text, position }: { text?: string; position: string }) {
  return <div className={`${position} truncate px-3 font-semibold text-white align-text-top`}>{text}</div>;
}
