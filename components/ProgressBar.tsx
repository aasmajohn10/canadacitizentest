interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = total === 0 ? 0 : Math.round((current / total) * 100);
  return (
    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
      <div
        className="h-2 bg-[#C0392B] rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
