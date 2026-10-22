export type Source = {
  label: string;
  url?: string;
};

export type Stat = {
  label: string;
  value: string;
  note: string;
};

export type Datum = {
  label: string;
  value: number;
};

export type Update = {
  date: string;
  title: string;
  summary: string;
  href: string;
};
