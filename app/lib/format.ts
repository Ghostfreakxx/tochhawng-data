const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Formats "2026-10-15" as "15 Oct 2026" and "2026-01" as "Jan 2026" without
// going through Date, so the output never shifts with the reader's time zone.
export function formatDate(iso: string) {
  const [year, month, day] = iso.split("-");
  const name = MONTHS[Number(month) - 1];
  return day ? `${Number(day)} ${name} ${year}` : `${name} ${year}`;
}

export type Unit = {
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export function formatValue(value: number, unit: Unit = {}) {
  const number = value.toLocaleString("en-IN", {
    maximumFractionDigits: unit.decimals ?? 0,
  });
  return `${unit.prefix ?? ""}${number}${unit.suffix ?? ""}`;
}

export function hostname(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}
