export default function AtmButtonLabel({ text, position }: { text?: string; position: string }) {
  return (
    <div className={`${position} truncate px-3 align-text-top font-semibold text-white`}>
      {text}
    </div>
  );
}
