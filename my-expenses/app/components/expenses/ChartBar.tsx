interface Props {
  maxValue: number;
  value: number;
  label: string;
}

export default function ChartBar({ maxValue, value, label }: Props) {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar--inner">
        <div className="chart-bar--fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar--label">{label}</div>
    </div>
  );
}
